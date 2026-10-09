// Quiz experience: readable visual questions and strictly sequential progression.
(function () {
  const quizScreen = document.querySelector('#quizScreen');
  const questionCard = document.querySelector('.question-card');
  const options = document.querySelector('#options');
  const nextButton = document.querySelector('#nextButton');
  const toReadingButton = document.querySelector('#toReadingButton');
  const overviewButton = document.querySelector('#overviewButton');
  const overview = document.querySelector('#overview');
  const quizMessage = document.querySelector('#quizMessage');

  if (!quizScreen || !questionCard || !options || !nextButton || !toReadingButton) return;

  // The test is intentionally linear. Keep the overview node for legacy code,
  // but remove its UI so students cannot jump ahead.
  if (overviewButton) overviewButton.style.display = 'none';
  if (overview) overview.classList.add('is-hidden');

  const style = document.createElement('style');
  style.textContent = `
    #overviewButton { display: none !important; }
    #overview { display: none !important; }

    /* Visual questions use a media-first layout. The whole photo stays visible
       rather than being cropped into a shallow banner. */
    .question-card.has-visual-question .visual-scene.stock-visual {
      width: 100% !important;
      height: auto !important;
      min-height: 0 !important;
      max-height: none !important;
      aspect-ratio: 4 / 3;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden;
      background: #ecece8;
      border-radius: 16px;
    }

    .question-card.has-visual-question .stock-visual .stock-photo {
      width: 100% !important;
      height: 100% !important;
      min-height: 0 !important;
      max-height: 100% !important;
      object-fit: contain !important;
      object-position: center !important;
      background: #ecece8;
    }

    .question-card.has-visual-question .stock-visual .scene-caption {
      left: 10px !important;
      bottom: 10px !important;
      max-width: calc(100% - 20px);
    }

    .quiz-nav .button:disabled {
      opacity: .36 !important;
      cursor: not-allowed !important;
      transform: none !important;
    }

    @media (min-width: 641px) {
      .question-card.has-visual-question {
        display: grid !important;
        grid-template-columns: minmax(270px, .95fr) minmax(330px, 1.05fr);
        grid-template-areas:
          "meta meta"
          "title title"
          "context context"
          "interaction interaction"
          "visual answers";
        column-gap: clamp(18px, 2.7vw, 26px);
        row-gap: clamp(8px, 1.2vh, 14px);
        align-content: start !important;
        align-items: start !important;
      }

      .question-card.has-visual-question .question-meta-row { grid-area: meta; margin-bottom: 0 !important; }
      .question-card.has-visual-question > h2 { grid-area: title; margin-bottom: 0 !important; }
      .question-card.has-visual-question #questionContext { grid-area: context; }
      .question-card.has-visual-question #questionInteraction { grid-area: interaction; }
      .question-card.has-visual-question #questionVisual { grid-area: visual; min-width: 0; }
      .question-card.has-visual-question #options { grid-area: answers; align-self: start; min-width: 0; }

      .question-card.has-visual-question .context-card,
      .question-card.has-visual-question .sentence-builder {
        margin-bottom: 0 !important;
      }

      .question-card.has-visual-question .options {
        gap: clamp(7px, 1vh, 11px);
      }

      .question-card.has-visual-question .option {
        min-height: clamp(46px, 6.5vh, 58px);
      }
    }

    @media (max-width: 640px) {
      .question-card.has-visual-question .visual-scene.stock-visual {
        aspect-ratio: 4 / 3;
        margin-bottom: 16px !important;
      }
    }
  `;
  document.head.appendChild(style);

  function isAnsweredAt(index) {
    if (typeof questions === 'undefined' || typeof objectiveAnswers === 'undefined') return false;
    const question = questions[index];
    return Boolean(question) && Number.isInteger(objectiveAnswers[question.id]);
  }

  function currentQuestionIsAnswered() {
    if (typeof currentQuestion === 'undefined') return false;
    return isAnsweredAt(currentQuestion);
  }

  function allQuestionsThrough(index) {
    if (typeof questions === 'undefined') return false;
    const safeIndex = Math.min(Math.max(index, 0), questions.length - 1);
    for (let i = 0; i <= safeIndex; i += 1) {
      if (!isAnsweredAt(i)) return false;
    }
    return true;
  }

  function firstUnansweredThrough(index) {
    if (typeof questions === 'undefined') return -1;
    const safeIndex = Math.min(Math.max(index, 0), questions.length - 1);
    for (let i = 0; i <= safeIndex; i += 1) {
      if (!isAnsweredAt(i)) return i;
    }
    return -1;
  }

  function currentQuestionHasVisual() {
    if (typeof questions === 'undefined' || typeof currentQuestion === 'undefined') return false;
    return Boolean(questions[currentQuestion]?.visual);
  }

  function progressionIsSatisfied() {
    if (typeof currentQuestion === 'undefined') return false;
    return currentQuestionIsAnswered() && allQuestionsThrough(currentQuestion);
  }

  function applyQuestionState() {
    const unlocked = progressionIsSatisfied();
    const hasVisual = currentQuestionHasVisual();

    questionCard.classList.toggle('has-visual-question', hasVisual);
    nextButton.disabled = !unlocked;
    toReadingButton.disabled = !unlocked;

    nextButton.setAttribute('aria-disabled', unlocked ? 'false' : 'true');
    toReadingButton.setAttribute('aria-disabled', unlocked ? 'false' : 'true');

    if (overview) overview.classList.add('is-hidden');
  }

  function showAnswerRequiredMessage() {
    if (!quizMessage) return;
    const missing = firstUnansweredThrough(currentQuestion);
    quizMessage.textContent = missing >= 0 && missing !== currentQuestion
      ? `Responda primeiro a questão ${missing + 1}.`
      : 'Selecione uma resposta antes de continuar.';
  }

  nextButton.addEventListener('click', (event) => {
    if (progressionIsSatisfied()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showAnswerRequiredMessage();
  }, true);

  toReadingButton.addEventListener('click', (event) => {
    if (progressionIsSatisfied() && allQuestionsThrough(questions.length - 1)) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const missing = firstUnansweredThrough(questions.length - 1);
    if (missing >= 0 && typeof goToQuestion === 'function') {
      goToQuestion(missing);
      if (quizMessage) quizMessage.textContent = `Responda primeiro a questão ${missing + 1}.`;
    } else {
      showAnswerRequiredMessage();
    }
  }, true);

  if (typeof goToQuestion === 'function') {
    const originalGoToQuestion = goToQuestion;
    goToQuestion = function (index) {
      const target = Math.min(Math.max(index, 0), questions.length - 1);

      if (target > currentQuestion) {
        const firstMissingBeforeTarget = firstUnansweredThrough(target - 1);
        if (firstMissingBeforeTarget >= 0) {
          originalGoToQuestion(firstMissingBeforeTarget);
          if (quizMessage) quizMessage.textContent = `Responda primeiro a questão ${firstMissingBeforeTarget + 1}.`;
          requestAnimationFrame(applyQuestionState);
          return;
        }
      }

      originalGoToQuestion(target);
      requestAnimationFrame(applyQuestionState);
    };
  }

  // Old saved sessions may have the student positioned after an unanswered item.
  // Bring them back to the earliest gap before allowing progression again.
  if (typeof currentQuestion !== 'undefined' && typeof goToQuestion === 'function') {
    const missingBeforeCurrent = firstUnansweredThrough(currentQuestion);
    if (missingBeforeCurrent >= 0 && missingBeforeCurrent < currentQuestion) {
      goToQuestion(missingBeforeCurrent);
    }
  }

  new MutationObserver(() => requestAnimationFrame(applyQuestionState))
    .observe(options, { childList: true, subtree: false });

  const questionVisual = document.querySelector('#questionVisual');
  if (questionVisual) {
    new MutationObserver(() => requestAnimationFrame(applyQuestionState))
      .observe(questionVisual, { childList: true, subtree: true });
  }

  applyQuestionState();
})();
