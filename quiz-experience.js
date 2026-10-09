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

  // The test is now intentionally linear. Keep the overview node for legacy code,
  // but remove its UI so students cannot jump ahead.
  if (overviewButton) overviewButton.style.display = 'none';
  if (overview) overview.classList.add('is-hidden');

  const style = document.createElement('style');
  style.textContent = `
    #overviewButton { display: none !important; }
    #overview { display: none !important; }

    /* A visual question gets a media-first layout instead of squeezing the photo
       into a shallow strip. The complete image remains visible. */
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

    /* Make the locked forward state obvious without adding extra copy. */
    .quiz-nav .button:disabled {
      opacity: .36 !important;
      cursor: not-allowed !important;
      transform: none !important;
    }

    @media (min-width: 641px) {
      .question-card.has-visual-question {
        display: grid !important;
        grid-template-columns: minmax(260px, .95fr) minmax(330px, 1.05fr);
        grid-template-areas:
          "meta meta"
          "title title"
          "context context"
          "interaction interaction"
          "visual answers";
        column-gap: clamp(16px, 2.5vw, 24px);
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

  function currentQuestionIsAnswered() {
    if (typeof questions === 'undefined' || typeof currentQuestion === 'undefined') return false;
    const question = questions[currentQuestion];
    if (!question || typeof objectiveAnswers === 'undefined') return false;
    return Number.isInteger(objectiveAnswers[question.id]);
  }

  function currentQuestionHasVisual() {
    if (typeof questions === 'undefined' || typeof currentQuestion === 'undefined') return false;
    return Boolean(questions[currentQuestion]?.visual);
  }

  function applyQuestionState() {
    const answered = currentQuestionIsAnswered();
    const hasVisual = currentQuestionHasVisual();

    questionCard.classList.toggle('has-visual-question', hasVisual);
    nextButton.disabled = !answered;
    toReadingButton.disabled = !answered;

    nextButton.setAttribute('aria-disabled', answered ? 'false' : 'true');
    toReadingButton.setAttribute('aria-disabled', answered ? 'false' : 'true');

    // A stale overview must never become a way to jump forward.
    if (overview) overview.classList.add('is-hidden');
  }

  function showAnswerRequiredMessage() {
    if (!quizMessage) return;
    quizMessage.textContent = 'Selecione uma resposta antes de continuar.';
  }

  // Safety guard in addition to the disabled state. This also blocks synthetic
  // activation or an old browser state from advancing an unanswered question.
  nextButton.addEventListener('click', (event) => {
    if (currentQuestionIsAnswered()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showAnswerRequiredMessage();
  }, true);

  toReadingButton.addEventListener('click', (event) => {
    if (currentQuestionIsAnswered()) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    showAnswerRequiredMessage();
  }, true);

  // Prevent any programmatic forward jump while the current question is unanswered.
  if (typeof goToQuestion === 'function') {
    const originalGoToQuestion = goToQuestion;
    goToQuestion = function (index) {
      const target = Math.min(Math.max(index, 0), questions.length - 1);
      if (target > currentQuestion && !currentQuestionIsAnswered()) {
        showAnswerRequiredMessage();
        applyQuestionState();
        return;
      }
      originalGoToQuestion(target);
      requestAnimationFrame(applyQuestionState);
    };
  }

  // renderQuestion rebuilds the answer buttons after every selection, so reapply
  // the lock and the visual layout whenever that DOM changes.
  new MutationObserver(() => requestAnimationFrame(applyQuestionState))
    .observe(options, { childList: true, subtree: false });

  const questionVisual = document.querySelector('#questionVisual');
  if (questionVisual) {
    new MutationObserver(() => requestAnimationFrame(applyQuestionState))
      .observe(questionVisual, { childList: true, subtree: true });
  }

  applyQuestionState();
})();
