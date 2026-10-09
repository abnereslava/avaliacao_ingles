// Reliability layer for stage progression and sharing.
(function () {
  const toReading = document.querySelector('#toReadingButton');
  const shareButton = document.querySelector('#shareResultsButton');
  const overview = document.querySelector('#overview');

  const style = document.createElement('style');
  style.textContent = `
    .assessment-toast {
      position: fixed;
      z-index: 80;
      left: 50%;
      bottom: 22px;
      transform: translateX(-50%);
      width: min(calc(100vw - 32px), 560px);
      padding: 12px 16px;
      border: 1px solid var(--border);
      border-radius: 14px;
      background: rgba(24,24,23,.96);
      color: #fff;
      box-shadow: 0 14px 40px rgba(24,24,23,.22);
      font-size: .9rem;
      font-weight: 650;
      text-align: center;
    }
    .overview button.is-missing {
      border-color: var(--danger) !important;
      box-shadow: inset 0 0 0 1px var(--danger);
    }
    .button.is-busy {
      cursor: wait;
      opacity: .72;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);

  let toastTimer = null;
  function showToast(message) {
    let toast = document.querySelector('.assessment-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'assessment-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('is-hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('is-hidden'), 4200);
  }

  function restoreStoredChoice(question, storedValue) {
    if (Number.isInteger(storedValue) && storedValue >= 0 && storedValue < question.options.length) {
      return storedValue;
    }
    if (typeof storedValue === 'string') {
      const index = question.options.indexOf(storedValue);
      return index >= 0 ? index : null;
    }
    return null;
  }

  function reconcileObjectiveAnswers() {
    const current = questions[currentQuestion];
    if (current && !Number.isInteger(objectiveAnswers[current.id])) {
      const selected = [...document.querySelectorAll('#options .option')].findIndex((button) => button.classList.contains('is-selected'));
      if (selected >= 0) objectiveAnswers[current.id] = selected;
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const stored = saved?.objective;
      if (!stored || typeof stored !== 'object') return;

      questions.forEach((question) => {
        if (Number.isInteger(objectiveAnswers[question.id])) return;
        const restored = restoreStoredChoice(question, stored[question.id]);
        if (Number.isInteger(restored)) objectiveAnswers[question.id] = restored;
      });
    } catch {
      // Storage issues must never prevent the assessment from continuing.
    }
  }

  function getMissingObjectiveIndexes() {
    reconcileObjectiveAnswers();
    return questions
      .map((question, index) => Number.isInteger(objectiveAnswers[question.id]) ? null : index)
      .filter((index) => index !== null);
  }

  function markMissingQuestions(missingIndexes) {
    if (!overview) return;
    const missing = new Set(missingIndexes.map((index) => String(index + 1)));
    overview.querySelectorAll('button').forEach((button) => {
      if (button.classList.contains('overview-close')) return;
      button.classList.toggle('is-missing', missing.has(button.textContent.trim()));
    });
  }

  if (toReading) {
    toReading.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const missing = getMissingObjectiveIndexes();
      saveProgress();

      if (!missing.length) {
        showStage('reading');
        return;
      }

      renderOverview();
      markMissingQuestions(missing);
      const numbers = missing.map((index) => index + 1);
      const preview = numbers.slice(0, 6).join(', ');
      const extra = numbers.length > 6 ? ` e mais ${numbers.length - 6}` : '';
      const message = numbers.length === 1
        ? `Falta responder a questão ${numbers[0]}. Ela foi aberta agora.`
        : `Ainda faltam ${numbers.length} questões: ${preview}${extra}. A primeira pendente foi aberta.`;

      goToQuestion(missing[0]);
      quizMessage.textContent = message;
      showToast(message);
    }, true);
  }

  function safeFileName(value) {
    return String(value || 'aluno')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase() || 'aluno';
  }

  function buildShareSummary() {
    const objectiveScore = getObjectiveScore();
    const readingScore = getReadingScore();
    const total = questions.length + readingPassages.flatMap((p) => p.questions).length;
    const totalScore = objectiveScore + readingScore;
    const percent = Math.round((totalScore / total) * 100);
    let estimate = '';
    try {
      estimate = typeof diagnosticProfile === 'function' ? diagnosticProfile().estimate : '';
    } catch {
      estimate = '';
    }

    return [
      `Avaliação diagnóstica de inglês — ${student.name}`,
      estimate ? `Estimativa automática: ${estimate}` : null,
      `Pontuação automática: ${totalScore}/${total} (${percent}%)`,
      'O relatório completo, incluindo as produções escritas, está no arquivo anexado.',
    ].filter(Boolean).join('\n');
  }

  async function copyFullReport(report) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(report);
      return true;
    }

    const textarea = document.createElement('textarea');
    textarea.value = report;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    return copied;
  }

  function downloadReportFile(file) {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  async function shareReportLightweight() {
    const report = buildShareText();
    const summary = buildShareSummary();
    const file = new File(
      [report],
      `avaliacao-ingles-${safeFileName(student.name)}.txt`,
      { type: 'text/plain;charset=utf-8' }
    );

    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({
        title: 'Avaliação diagnóstica de inglês',
        text: summary,
        files: [file],
      });
      return 'Relatório compartilhado.';
    }

    if (navigator.share) {
      try {
        await copyFullReport(report);
      } catch {
        // The short share can still proceed if clipboard access is blocked.
      }
      await navigator.share({
        title: 'Avaliação diagnóstica de inglês',
        text: `${summary}\n\nO relatório completo foi copiado para a área de transferência.`,
      });
      return 'Resumo compartilhado; relatório completo copiado.';
    }

    downloadReportFile(file);
    try {
      await copyFullReport(report);
      return 'Relatório baixado e também copiado para a área de transferência.';
    } catch {
      return 'Relatório baixado como arquivo de texto.';
    }
  }

  if (shareButton) {
    shareButton.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();
      if (shareButton.classList.contains('is-busy')) return;

      const originalText = shareButton.querySelector('span')?.textContent || '';
      shareButton.classList.add('is-busy');
      shareButton.setAttribute('aria-busy', 'true');
      const label = shareButton.querySelector('span');
      if (label) label.textContent = 'Preparando relatório…';
      if (shareStatus) shareStatus.textContent = '';

      try {
        const result = await shareReportLightweight();
        if (shareStatus) shareStatus.textContent = result;
      } catch (error) {
        if (error?.name !== 'AbortError') {
          try {
            const report = buildShareText();
            downloadReportFile(new File(
              [report],
              `avaliacao-ingles-${safeFileName(student.name)}.txt`,
              { type: 'text/plain;charset=utf-8' }
            ));
            if (shareStatus) shareStatus.textContent = 'O compartilhamento não abriu; o relatório completo foi baixado em .txt.';
          } catch {
            if (shareStatus) shareStatus.textContent = 'Não foi possível compartilhar neste navegador.';
          }
        }
      } finally {
        shareButton.classList.remove('is-busy');
        shareButton.removeAttribute('aria-busy');
        if (label) label.textContent = originalText;
      }
    }, true);
  }
})();
