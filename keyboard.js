// Keyboard shortcuts for the objective section.
// 1–4 select an answer; Enter advances once the current question is answered.
(function () {
  const quiz = document.querySelector("#quizScreen");
  const options = document.querySelector("#options");
  const next = document.querySelector("#nextButton");
  const toReading = document.querySelector("#toReadingButton");
  const settings = document.querySelector("#settingsMenu");
  const reset = document.querySelector("#resetDialog");
  const overview = document.querySelector("#overview");
  const overviewButton = document.querySelector("#overviewButton");

  if (!quiz || !options) return;

  const style = document.createElement("style");
  style.textContent = `
    .overview-close {
      grid-column: 1 / -1;
      justify-self: end;
      width: auto !important;
      aspect-ratio: auto !important;
      min-height: 34px;
      padding: 6px 12px;
      border: 1px solid var(--border) !important;
      border-radius: 999px !important;
      background: var(--surface) !important;
      color: var(--text) !important;
      font-size: .8rem !important;
      font-weight: 750;
    }

    .overview-close:hover {
      border-color: #bdbdb6 !important;
      background: var(--surface-soft) !important;
    }

    @media (min-width: 641px) {
      .overview:not(.is-hidden) {
        max-height: calc(100dvh - 105px);
        overflow-y: auto;
      }
    }
  `;
  document.head.appendChild(style);

  function annotateOptions() {
    [...options.querySelectorAll(".option")].forEach((button, index) => {
      if (index > 3) return;
      button.setAttribute("aria-keyshortcuts", String(index + 1));
      const marker = button.querySelector(".option-letter");
      if (marker) marker.textContent = String(index + 1);
    });
  }

  function hideOverview() {
    if (!overview || !overviewButton) return;
    overview.classList.add("is-hidden");
    overviewButton.textContent = "Ver questões respondidas";
    overviewButton.setAttribute("aria-expanded", "false");
    overviewButton.focus({ preventScroll: true });
  }

  function ensureOverviewCloseButton() {
    if (!overview || overview.classList.contains("is-hidden")) return;
    if (overview.querySelector(".overview-close")) return;

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "overview-close";
    closeButton.textContent = "Fechar";
    closeButton.setAttribute("aria-label", "Fechar mapa de questões");
    closeButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      hideOverview();
    });
    overview.prepend(closeButton);
  }

  function currentQuestionIsAnswered() {
    if (typeof questions === "undefined" || typeof currentQuestion === "undefined" || typeof objectiveAnswers === "undefined") return false;
    const question = questions[currentQuestion];
    return Boolean(question && Number.isInteger(objectiveAnswers[question.id]));
  }

  function getForwardButton() {
    return next && !next.classList.contains("is-hidden") ? next : toReading;
  }

  function focusForwardWhenReady() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const forwardButton = getForwardButton();
        if (forwardButton && !forwardButton.disabled) {
          forwardButton.focus({ preventScroll: true });
        }
      });
    });
  }

  annotateOptions();
  new MutationObserver(annotateOptions).observe(options, { childList: true });

  if (overview && overviewButton) {
    overviewButton.setAttribute("aria-expanded", "false");

    overviewButton.addEventListener("click", () => {
      requestAnimationFrame(() => {
        const isOpen = !overview.classList.contains("is-hidden");
        overviewButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (isOpen) ensureOverviewCloseButton();
      });
    });

    overview.addEventListener("click", (event) => {
      const target = event.target instanceof Element ? event.target.closest("button") : null;
      if (!target || target.classList.contains("overview-close")) return;
      requestAnimationFrame(hideOverview);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overview && !overview.classList.contains("is-hidden")) {
      event.preventDefault();
      hideOverview();
      return;
    }

    if (event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey) return;
    if (quiz.classList.contains("is-hidden")) return;
    if (reset?.open) return;
    if (settings && !settings.classList.contains("is-hidden")) return;
    if (overview && !overview.classList.contains("is-hidden")) return;

    const target = event.target;
    if (target instanceof HTMLElement) {
      const tag = target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return;
    }

    // Enter explicitly advances after a valid answer. This no longer depends on
    // focus having successfully landed on the Próxima button first.
    if (event.key === "Enter") {
      if (!currentQuestionIsAnswered()) return;
      const forwardButton = getForwardButton();
      if (!forwardButton || forwardButton.disabled) return;
      event.preventDefault();
      forwardButton.click();
      return;
    }

    if (!/^[1-4]$/.test(event.key)) return;

    const index = Number(event.key) - 1;
    const answerButton = options.querySelectorAll(".option")[index];
    if (!answerButton) return;

    event.preventDefault();
    answerButton.click();
    focusForwardWhenReady();
  });
})();

// Load reliability fixes after all assessment scripts are ready.
(function () {
  if (document.querySelector('script[data-reliability-loader]')) return;
  const script = document.createElement('script');
  script.src = 'reliability.js';
  script.dataset.reliabilityLoader = 'true';
  document.body.appendChild(script);
})();

// Load visual polish after the functional layers.
(function () {
  if (document.querySelector('script[data-ui-polish-loader]')) return;
  const script = document.createElement('script');
  script.src = 'ui-polish.js';
  script.dataset.uiPolishLoader = 'true';
  document.body.appendChild(script);
})();

// Load the linear-flow and visual-question experience layer.
(function () {
  if (document.querySelector('script[data-quiz-experience-loader]')) return;
  const script = document.createElement('script');
  script.src = 'quiz-experience.js';
  script.dataset.quizExperienceLoader = 'true';
  document.body.appendChild(script);
})();
