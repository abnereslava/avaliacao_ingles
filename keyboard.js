// Keyboard shortcuts for the objective section.
// 1–4 select an answer; focus then moves to the forward button so Enter advances.
(function () {
  const quiz = document.querySelector("#quizScreen");
  const options = document.querySelector("#options");
  const next = document.querySelector("#nextButton");
  const toReading = document.querySelector("#toReadingButton");
  const settings = document.querySelector("#settingsMenu");
  const reset = document.querySelector("#resetDialog");

  if (!quiz || !options) return;

  const hint = document.createElement("div");
  hint.className = "keyboard-hint";
  hint.setAttribute("aria-label", "Atalhos de teclado: teclas 1 a 4 selecionam uma resposta e Enter avança");
  hint.innerHTML = "Atalhos: <kbd>1</kbd>–<kbd>4</kbd> selecionam · <kbd>Enter</kbd> avança";
  options.insertAdjacentElement("afterend", hint);

  const style = document.createElement("style");
  style.textContent = `
    .keyboard-hint {
      margin-top: 10px;
      color: var(--muted);
      font-size: .76rem;
      text-align: center;
      user-select: none;
    }
    .keyboard-hint kbd {
      display: inline-grid;
      min-width: 1.55em;
      height: 1.55em;
      place-items: center;
      padding: 0 .28em;
      border: 1px solid var(--border);
      border-bottom-width: 2px;
      border-radius: 5px;
      background: var(--surface);
      color: var(--text);
      font: inherit;
      font-weight: 800;
      line-height: 1;
    }
    @media (max-width: 640px), (pointer: coarse) {
      .keyboard-hint { display: none; }
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

  annotateOptions();
  new MutationObserver(annotateOptions).observe(options, { childList: true });

  document.addEventListener("keydown", (event) => {
    if (event.defaultPrevented || event.ctrlKey || event.altKey || event.metaKey) return;
    if (quiz.classList.contains("is-hidden")) return;
    if (reset?.open) return;
    if (settings && !settings.classList.contains("is-hidden")) return;

    const target = event.target;
    if (target instanceof HTMLElement) {
      const tag = target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable) return;
    }

    if (!/^[1-4]$/.test(event.key)) return;

    const index = Number(event.key) - 1;
    const answerButton = options.querySelectorAll(".option")[index];
    if (!answerButton) return;

    event.preventDefault();
    answerButton.click();

    requestAnimationFrame(() => {
      const forwardButton = next && !next.classList.contains("is-hidden") ? next : toReading;
      forwardButton?.focus({ preventScroll: true });
    });
  });
})();
