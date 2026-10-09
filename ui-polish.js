// Visual polish layer: simplified metadata, top-aligned questions and subtle motion.
(function () {
  const startScreen = document.querySelector('#startScreen');
  const questionCard = document.querySelector('.question-card');
  const questionText = document.querySelector('#questionText');
  const questionCounterNode = document.querySelector('#questionCounter');
  const options = document.querySelector('#options');
  const readingContainer = document.querySelector('#readingContainer');
  const writingContainer = document.querySelector('#writingContainer');
  const resultScreen = document.querySelector('#resultScreen');

  // Remove the decorative EN block from the initial screen.
  startScreen?.querySelector('.brand-mark')?.remove();

  // Keep the question type (Complete / Choose / Context), but hide internal category labels.
  const sectionPill = document.querySelector('#questionSection');
  if (sectionPill) sectionPill.setAttribute('aria-hidden', 'true');

  // Replace the former emoji illustrations with real stock photography.
  const stockVisuals = {
    'cat-under-table': {
      src: 'https://images.pexels.com/photos/36427304/pexels-photo-36427304.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'A cat hiding underneath a table',
      caption: 'Look at the position',
      position: 'center 48%',
    },
    'hotel-trip': {
      src: 'https://images.pexels.com/photos/12663057/pexels-photo-12663057.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'A traveller with a suitcase inside a hotel room',
      caption: 'Travel plan',
      position: 'center 74%',
    },
    'missed-bus': {
      src: 'https://images.pexels.com/photos/16470272/pexels-photo-16470272.jpeg?auto=compress&cs=tinysrgb&w=1000',
      alt: 'A person running beside a bus',
      caption: 'What is probably happening?',
      position: 'center 55%',
    },
  };

  if (typeof renderVisual === 'function') {
    renderVisual = function (name) {
      const visual = stockVisuals[name];
      if (!visual) {
        questionVisual.innerHTML = '';
        return;
      }

      questionVisual.innerHTML = `
        <figure class="visual-scene stock-visual" aria-label="${escapeHtml(visual.alt)}">
          <img
            class="stock-photo"
            src="${visual.src}"
            alt="${escapeHtml(visual.alt)}"
            loading="eager"
            decoding="async"
            style="object-position:${visual.position}"
          />
          <figcaption class="scene-caption">${escapeHtml(visual.caption)}</figcaption>
        </figure>`;
    };
  }

  const style = document.createElement('style');
  style.textContent = `
    /* Simplify question metadata and keep every objective card aligned from the top. */
    #questionSection,
    .section-pill {
      display: none !important;
    }

    .question-meta-row {
      justify-content: flex-end !important;
      margin-bottom: clamp(8px, 1.2vh, 14px) !important;
    }

    .question-card {
      justify-content: flex-start !important;
      align-items: stretch;
    }

    .question-card h2 {
      margin-top: 0;
    }

    /* Real-photo question visuals. */
    .visual-scene.stock-visual {
      min-height: clamp(130px, 24vh, 210px);
      padding: 0 !important;
      background: #e9e9e5;
    }

    .stock-visual .stock-photo {
      display: block;
      width: 100%;
      height: 100%;
      min-height: inherit;
      object-fit: cover;
      border-radius: inherit;
    }

    .stock-visual .scene-caption {
      left: 12px;
      bottom: 10px;
      box-shadow: 0 4px 16px rgba(0,0,0,.08);
    }

    /* Interface motion */
    @keyframes ui-screen-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes ui-question-in {
      from { opacity: .35; transform: translateY(9px) scale(.996); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    @keyframes ui-option-in {
      from { opacity: 0; transform: translateY(7px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes ui-card-in {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .screen:not(.is-hidden) {
      animation: ui-screen-in .32s cubic-bezier(.2,.75,.25,1) both;
    }

    .question-card.question-enter {
      animation: ui-question-in .28s cubic-bezier(.2,.75,.25,1) both;
    }

    .option.option-enter {
      opacity: 0;
      animation: ui-option-in .24s cubic-bezier(.2,.75,.25,1) forwards;
      animation-delay: calc(var(--option-index, 0) * 35ms);
    }

    .option {
      transition: border-color .16s ease, background .16s ease, transform .16s ease, box-shadow .16s ease !important;
    }

    .option:hover {
      transform: translateY(-2px) !important;
    }

    .option:active {
      transform: translateY(0) scale(.995) !important;
    }

    .option.is-selected {
      transform: translateY(-1px);
    }

    .option.is-selected .option-letter {
      transform: scale(1.06);
      transition: transform .18s cubic-bezier(.2,.8,.25,1), background .18s ease, color .18s ease;
    }

    .button,
    .icon-button,
    .overview-link {
      transition: transform .16s ease, opacity .16s ease, background .16s ease, border-color .16s ease, box-shadow .16s ease !important;
    }

    .button:hover:not(:disabled),
    .icon-button:hover,
    .overview-link:hover {
      transform: translateY(-1px);
    }

    .button:active:not(:disabled),
    .icon-button:active,
    .overview-link:active {
      transform: translateY(0) scale(.985);
    }

    .reading-card.ui-card-enter,
    .writing-card.ui-card-enter,
    .result-grid > section.ui-card-enter,
    .diagnostic-panel.ui-card-enter {
      opacity: 0;
      animation: ui-card-in .34s cubic-bezier(.2,.75,.25,1) forwards;
      animation-delay: calc(var(--card-index, 0) * 70ms);
    }

    .overview:not(.is-hidden) {
      animation: ui-card-in .22s cubic-bezier(.2,.75,.25,1) both;
    }

    .progress-bar {
      transition: width .32s cubic-bezier(.2,.75,.25,1) !important;
    }

    @media (min-width: 641px) and (max-height: 760px) {
      .visual-scene.stock-visual {
        min-height: 78px;
        max-height: 105px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        scroll-behavior: auto !important;
        animation-duration: .001ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .001ms !important;
      }
    }
  `;
  document.head.appendChild(style);

  let lastAnimatedQuestionKey = null;

  function getQuestionKey() {
    return `${questionCounterNode?.textContent || ''}|${questionText?.textContent || ''}`;
  }

  function animateOptions() {
    if (!options) return;
    [...options.querySelectorAll('.option')].forEach((button, index) => {
      button.style.setProperty('--option-index', String(index));
      button.classList.remove('option-enter');
      void button.offsetWidth;
      button.classList.add('option-enter');
    });
  }

  function animateQuestionIfChanged(force = false) {
    if (!questionCard) return;
    const key = getQuestionKey();
    if (!force && key === lastAnimatedQuestionKey) return;
    lastAnimatedQuestionKey = key;

    questionCard.classList.remove('question-enter');
    void questionCard.offsetWidth;
    questionCard.classList.add('question-enter');
    requestAnimationFrame(animateOptions);
  }

  function animateCards(container, selector) {
    if (!container) return;
    [...container.querySelectorAll(selector)].forEach((card, index) => {
      card.style.setProperty('--card-index', String(index));
      card.classList.remove('ui-card-enter');
      void card.offsetWidth;
      card.classList.add('ui-card-enter');
    });
  }

  function animateResults() {
    if (!resultScreen || resultScreen.classList.contains('is-hidden')) return;
    const cards = [
      resultScreen.querySelector('.diagnostic-panel'),
      ...resultScreen.querySelectorAll('.result-grid > section'),
    ].filter(Boolean);
    cards.forEach((card, index) => {
      card.style.setProperty('--card-index', String(index));
      card.classList.remove('ui-card-enter');
      void card.offsetWidth;
      card.classList.add('ui-card-enter');
    });
  }

  if (questionText) {
    new MutationObserver(() => requestAnimationFrame(() => animateQuestionIfChanged(false))).observe(questionText, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  if (questionCounterNode) {
    new MutationObserver(() => requestAnimationFrame(() => animateQuestionIfChanged(false))).observe(questionCounterNode, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  // Do not replay entrance animations when an answer is merely selected or changed.
  if (options) {
    new MutationObserver(() => {
      requestAnimationFrame(() => {
        if (getQuestionKey() !== lastAnimatedQuestionKey) animateQuestionIfChanged(false);
      });
    }).observe(options, { childList: true });
  }

  if (readingContainer) {
    new MutationObserver(() => requestAnimationFrame(() => animateCards(readingContainer, '.reading-card')))
      .observe(readingContainer, { childList: true });
  }

  if (writingContainer) {
    new MutationObserver(() => requestAnimationFrame(() => animateCards(writingContainer, '.writing-card')))
      .observe(writingContainer, { childList: true });
  }

  if (resultScreen) {
    new MutationObserver(() => requestAnimationFrame(animateResults))
      .observe(resultScreen, { attributes: true, attributeFilter: ['class'] });
  }

  // Initial state for restored sessions.
  animateQuestionIfChanged(true);
  animateCards(readingContainer, '.reading-card');
  animateCards(writingContainer, '.writing-card');
  animateResults();
})();
