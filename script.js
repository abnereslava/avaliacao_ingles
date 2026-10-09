const questions = [
  { id: "q001", section: "Fundamentos · A1", type: "complete", text: "Choose the option that completes the sentence.", template: "Maria is my friend. {{answer}} is very nice.", options: ["He", "She", "It", "They"], answer: 1 },
  { id: "q002", section: "Fundamentos · A1", type: "complete", text: "Choose the option that completes the sentence.", template: "My parents {{answer}} at home.", options: ["am", "is", "are", "be"], answer: 2 },
  { id: "q003", section: "Fundamentos · A1", type: "choice", text: "Choose the correct question.", options: ["You are happy?", "Are you happy?", "Is you happy?", "Do you are happy?"], answer: 1 },
  { id: "q004", section: "Fundamentos · A1", type: "choice", text: "Choose the correct negative sentence.", options: ["He not is tired.", "He doesn’t tired.", "He isn’t tired.", "He don’t tired."], answer: 2 },
  { id: "q005", section: "Fundamentos · A1", type: "choice", text: "Which sentence is correct?", options: ["I have something for you.", "I have anything for you.", "I am something for you.", "I has something for you."], answer: 0 },
  { id: "q006", section: "Fundamentos · A1", type: "complete", text: "Choose the option that completes the sentence.", template: "This is John. {{answer}} favorite color is blue.", options: ["Her", "His", "Their", "Its"], answer: 1 },
  { id: "q007", section: "Fundamentos · A1", type: "choice", text: "What comes after Wednesday?", options: ["Tuesday", "Friday", "Thursday", "Sunday"], answer: 2 },
  { id: "q008", section: "Fundamentos · A1", type: "choice", text: "Choose the best answer to: “How’s the weather today?”", options: ["It’s Monday.", "It’s sunny.", "It’s July.", "It’s twelve."], answer: 1 },

  { id: "q009", section: "Estruturas · A1–A2", type: "complete", text: "Choose the option that completes the sentence.", template: "{{answer}} a book on the table.", options: ["There are", "There is", "Are there", "They are"], answer: 1 },
  { id: "q010", section: "Estruturas · A1–A2", type: "complete", text: "Choose the option that completes the sentence.", template: "{{answer}} three students in the classroom.", options: ["There is", "Is there", "There are", "It is"], answer: 2 },
  { id: "q011", section: "Estruturas · A1–A2", type: "complete", text: "Choose the correct preposition.", template: "The cat is {{answer}} the table.", options: ["under", "between", "behind", "far"], answer: 0, visual: "cat-under-table" },
  { id: "q012", section: "Estruturas · A1–A2", type: "choice", text: "Choose the Present Continuous sentence.", options: ["She studies English.", "She is studying English.", "She studied English.", "She will study English."], answer: 1 },
  { id: "q013", section: "Estruturas · A1–A2", type: "complete", text: "Choose the option that completes the sentence.", template: "Look at those dark clouds! It {{answer}} rain.", options: ["is going to", "was", "did", "has"], answer: 0 },
  { id: "q014", section: "Estruturas · A1–A2", type: "choice", text: "Someone says: “There’s no milk!” You decide at that moment to buy some. Choose the best answer.", options: ["I was buying some.", "I’m going buy some.", "I’ll buy some.", "I bought some."], answer: 2 },
  { id: "q015", section: "Estruturas · A1–A2", type: "complete", text: "Choose the pair that completes the sentence.", template: "Yesterday, Sarah {{0}} at school, but her friends {{1}} at home.", options: ["were / was", "was / were", "is / are", "did / were"], fills: [["were", "was"], ["was", "were"], ["is", "are"], ["did", "were"]], answer: 1 },
  { id: "q016", section: "Estruturas · A1–A2", type: "complete", text: "Choose the option that completes the question.", template: "Where {{answer}} you go yesterday?", options: ["were", "are", "did", "do"], answer: 2 },

  { id: "q017", section: "Uso da língua · A2", type: "complete", text: "Choose the correct comparative.", template: "My brother is {{answer}} than me.", options: ["tall", "tallest", "taller", "more tall"], answer: 2 },
  { id: "q018", section: "Uso da língua · A2", type: "complete", text: "Choose the correct superlative.", template: "This is the {{answer}} building in the city.", options: ["tall", "taller", "tallest", "most tall"], answer: 2 },
  { id: "q019", section: "Uso da língua · A2", type: "complete", text: "Choose the option that completes the sentence.", template: "This restaurant is {{answer}} than that one.", options: ["more expensive", "expensiver", "most expensive", "expensive more"], answer: 0 },
  { id: "q020", section: "Uso da língua · A2", type: "complete", text: "Choose the correct possessive word.", template: "This cellphone belongs to Sarah. It is {{answer}}.", options: ["her", "hers", "she", "his"], answer: 1 },
  { id: "q021", section: "Uso da língua · A2", type: "choice", text: "Choose the correct sentence.", options: ["Our house is bigger than theirs.", "Ours house is bigger than their.", "Our house is more big than they.", "Ours house is biggest than theirs."], answer: 0 },
  { id: "q022", section: "Uso da língua · A2", type: "choice", text: "Which sentence refers to a past life experience?", options: ["I have traveled to many countries.", "I travel tomorrow.", "I am travel yesterday.", "I will traveled last year."], answer: 0 },
  { id: "q023", section: "Uso da língua · A2", type: "complete", text: "Choose the option that completes the sentence.", template: "When I was a child, I {{answer}} soccer every day.", options: ["play", "played", "playing", "plays"], answer: 1 },

  { id: "q024", section: "Estruturas avançadas · A2", type: "choice", text: "Choose the Zero Conditional.", options: ["If it rains tomorrow, I will stay home.", "If I were rich, I would travel.", "If you heat ice, it melts.", "If I studied, I would pass."], answer: 2 },
  { id: "q025", section: "Estruturas avançadas · A2", type: "complete", text: "Complete the First Conditional.", template: "If it rains tomorrow, we {{answer}} at home.", options: ["stayed", "stay yesterday", "will stay", "would stayed"], answer: 2 },
  { id: "q026", section: "Estruturas avançadas · A2", type: "complete", text: "Complete the Second Conditional.", template: "If I had more money, I {{answer}} around the world.", options: ["travel", "will travel", "would travel", "traveled yesterday"], answer: 2 },
  { id: "q027", section: "Estruturas avançadas · A2", type: "choice", text: "Which sentence is in the passive voice?", options: ["Julia bought the book.", "Julia is buying the book.", "The book was bought by Julia.", "Julia buys books."], answer: 2 },
  { id: "q028", section: "Estruturas avançadas · A2", type: "choice", text: "Choose the correct passive form for: “They built a new shopping mall.”", options: ["A new shopping mall built them.", "A new shopping mall was built.", "A new shopping mall is build.", "A new shopping mall were built."], answer: 1 },
  { id: "q029", section: "Estruturas avançadas · A2", type: "choice", text: "Which word is related to movies?", options: ["plot", "bookshelf", "countryside", "newspaper"], answer: 0 },
  { id: "q030", section: "Estruturas avançadas · A2", type: "complete", text: "Choose the option that completes the sentence.", template: "Have you ever {{answer}} abroad?", options: ["travel", "travels", "travelled", "travelling"], answer: 2 },
];

const STORAGE_KEY = "englishAssessmentProgress";
const LEGACY_STORAGE_KEYS = ["englishAssessmentProgressV2", "englishAssessmentProgressV1"];
const OLD_PERSISTENCE_PREF_KEY = "englishAssessmentPersistenceEnabled";

const $ = (selector) => document.querySelector(selector);
const startScreen = $("#startScreen");
const quizScreen = $("#quizScreen");
const resultScreen = $("#resultScreen");
const studentForm = $("#studentForm");
const studentNameInput = $("#studentName");
const studentSummary = $("#studentSummary");
const questionCounter = $("#questionCounter");
const progressBar = $("#progressBar");
const questionSection = $("#questionSection");
const questionType = $("#questionType");
const questionText = $("#questionText");
const questionInteraction = $("#questionInteraction");
const questionVisual = $("#questionVisual");
const optionsContainer = $("#options");
const quizMessage = $("#quizMessage");
const prevButton = $("#prevButton");
const nextButton = $("#nextButton");
const submitButton = $("#submitButton");
const overviewButton = $("#overviewButton");
const overview = $("#overview");
const settingsButton = $("#settingsButton");
const settingsMenu = $("#settingsMenu");
const resetAssessmentButton = $("#resetAssessmentButton");
const resetDialog = $("#resetDialog");
const confirmResetButton = $("#confirmResetButton");
const resultSettingsButton = $("#resultSettingsButton");
const resultStudent = $("#resultStudent");
const scoreValue = $("#scoreValue");
const scorePercent = $("#scorePercent");
const levelFeedback = $("#levelFeedback");
const sectionResults = $("#sectionResults");
const shareResultsButton = $("#shareResultsButton");
const shareStatus = $("#shareStatus");
const restartButton = $("#restartButton");
const startQuestionCount = $("#startQuestionCount");

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let student = { name: "" };
let assessmentCompleted = false;

startQuestionCount.textContent = `${questions.length} questões`;
localStorage.removeItem(OLD_PERSISTENCE_PREF_KEY);

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function hashString(value) {
  let hash = 5381;
  for (let index = 0; index < value.length; index += 1) {
    hash = ((hash << 5) + hash) ^ value.charCodeAt(index);
  }
  return (hash >>> 0).toString(36);
}

function getLegacyQuestionId(question) {
  const source = [question.section, question.type, question.template || question.text, ...question.options].join("|");
  return `q-${hashString(source)}`;
}

function buildStoredPayload() {
  const answersById = {};
  questions.forEach((question, index) => {
    if (answers[index] !== null) answersById[question.id] = question.options[answers[index]];
  });

  return {
    schemaVersion: 2,
    student,
    answersById,
    currentQuestionId: questions[currentQuestion]?.id || questions[0].id,
    completed: assessmentCompleted,
    savedAt: new Date().toISOString(),
  };
}

function saveProgress() {
  if (!student.name) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildStoredPayload()));
  } catch {
    // O navegador pode bloquear armazenamento em alguns modos privados.
  }
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
  LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
}

function migrateLegacyProgress() {
  for (const key of LEGACY_STORAGE_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const saved = JSON.parse(raw);
      if (!saved?.student?.name || !Array.isArray(saved.answers)) continue;

      student = { name: saved.student.name };
      answers = questions.map((question, index) => {
        const value = saved.answers[index];
        return Number.isInteger(value) && value >= 0 && value < question.options.length ? value : null;
      });
      currentQuestion = Math.min(Math.max(saved.currentQuestion ?? 0, 0), questions.length - 1);
      assessmentCompleted = false;
      saveProgress();
      LEGACY_STORAGE_KEYS.forEach((legacyKey) => localStorage.removeItem(legacyKey));
      return true;
    } catch {
      localStorage.removeItem(key);
    }
  }
  return false;
}

function restoreAnswer(question, savedAnswers) {
  const storedValue = savedAnswers[question.id] ?? savedAnswers[getLegacyQuestionId(question)];

  if (typeof storedValue === "string") {
    const optionIndex = question.options.indexOf(storedValue);
    return optionIndex >= 0 ? optionIndex : null;
  }

  if (Number.isInteger(storedValue) && storedValue >= 0 && storedValue < question.options.length) {
    return storedValue;
  }

  return null;
}

function restoreProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return migrateLegacyProgress();

    const saved = JSON.parse(raw);
    if (!saved?.student?.name || !saved.answersById || typeof saved.answersById !== "object") {
      return migrateLegacyProgress();
    }

    student = { name: saved.student.name };
    answers = questions.map((question) => restoreAnswer(question, saved.answersById));

    let storedQuestionIndex = questions.findIndex((question) => question.id === saved.currentQuestionId);
    if (storedQuestionIndex < 0) {
      storedQuestionIndex = questions.findIndex((question) => getLegacyQuestionId(question) === saved.currentQuestionId);
    }

    const firstUnanswered = answers.findIndex((answer) => answer === null);
    currentQuestion = storedQuestionIndex >= 0 ? storedQuestionIndex : firstUnanswered >= 0 ? firstUnanswered : 0;
    assessmentCompleted = Boolean(saved.completed) && answers.every((answer) => answer !== null);

    saveProgress();
    return true;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return migrateLegacyProgress();
  }
}

function hideAllScreens() {
  startScreen.classList.add("is-hidden");
  quizScreen.classList.add("is-hidden");
  resultScreen.classList.add("is-hidden");
}

function startQuiz() {
  hideAllScreens();
  quizScreen.classList.remove("is-hidden");
  studentSummary.textContent = student.name;
  closeSettingsMenu();
  renderQuestion();
  renderOverview();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCompleteSentence(question, selectedAnswer) {
  let html = escapeHtml(question.template);

  if (question.fills) {
    const fills = selectedAnswer === null ? [] : question.fills[selectedAnswer];
    html = html.replace(/\{\{(\d+)\}\}/g, (_, index) => {
      const value = fills?.[Number(index)];
      return value
        ? `<span class="inline-answer is-filled">${escapeHtml(value)}</span>`
        : `<span class="inline-answer" aria-label="espaço em branco">&nbsp;</span>`;
    });
  } else {
    const value = selectedAnswer === null ? null : question.options[selectedAnswer];
    html = html.replace(/\{\{answer\}\}/g, value
      ? `<span class="inline-answer is-filled">${escapeHtml(value)}</span>`
      : `<span class="inline-answer" aria-label="espaço em branco">&nbsp;</span>`);
  }

  questionInteraction.innerHTML = `<div class="sentence-builder" aria-live="polite">${html}</div>`;
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  questionCounter.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  questionSection.textContent = question.section;
  questionType.textContent = question.type === "complete" ? "Complete" : "Choose";
  questionText.textContent = question.text;
  quizMessage.textContent = "";

  if (question.type === "complete") renderCompleteSentence(question, selectedAnswer);
  else questionInteraction.innerHTML = "";

  if (question.visual === "cat-under-table") {
    questionVisual.innerHTML = `
      <div class="question-visual" aria-label="Ilustração: um gato está embaixo de uma mesa">
        <div class="mini-table"><span></span><span></span><span></span></div>
        <span class="cat">🐱</span>
      </div>`;
  } else {
    questionVisual.innerHTML = "";
  }

  optionsContainer.className = `options ${question.type === "complete" ? "options-compact" : ""}`;
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${selectedAnswer === index ? " is-selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", selectedAnswer === index ? "true" : "false");
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${escapeHtml(option)}</span>`;

    button.addEventListener("click", () => {
      answers[currentQuestion] = index;
      assessmentCompleted = false;
      saveProgress();
      renderQuestion();
      renderOverview();
    });

    optionsContainer.appendChild(button);
  });

  prevButton.disabled = currentQuestion === 0;
  const isLast = currentQuestion === questions.length - 1;
  nextButton.classList.toggle("is-hidden", isLast);
  submitButton.classList.toggle("is-hidden", !isLast);
}

function goToQuestion(index) {
  currentQuestion = Math.min(Math.max(index, 0), questions.length - 1);
  saveProgress();
  renderQuestion();
  renderOverview();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderOverview() {
  overview.innerHTML = "";
  questions.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    button.classList.toggle("is-answered", answers[index] !== null);
    button.classList.toggle("is-current", index === currentQuestion);
    button.setAttribute("aria-label", `Questão ${index + 1}${answers[index] !== null ? ", respondida" : ", não respondida"}`);
    button.addEventListener("click", () => goToQuestion(index));
    overview.appendChild(button);
  });
}

function getScore() {
  return answers.reduce((total, answer, index) => total + (answer === questions[index].answer ? 1 : 0), 0);
}

function getSectionScores() {
  const sectionOrder = [];
  const sections = new Map();

  questions.forEach((question, index) => {
    const label = question.section.split(" · ")[0];
    if (!sections.has(label)) {
      sections.set(label, { label, correct: 0, total: 0 });
      sectionOrder.push(label);
    }
    const group = sections.get(label);
    group.total += 1;
    if (answers[index] === question.answer) group.correct += 1;
  });

  return sectionOrder.map((label) => sections.get(label));
}

function getFeedback(percent) {
  if (percent >= 90) return "Excelente desempenho. Você demonstrou domínio consistente dos conteúdos avaliados.";
  if (percent >= 75) return "Bom desempenho. Os conteúdos principais estão bem consolidados, com alguns pontos para revisar.";
  if (percent >= 60) return "Desempenho intermediário. Vale revisar os conteúdos das questões em que houve mais dificuldade.";
  return "A avaliação indica que uma revisão dos conteúdos-base pode ser útil antes de avançar para estruturas mais complexas.";
}

function showResults() {
  const score = getScore();
  const percent = Math.round((score / questions.length) * 100);

  hideAllScreens();
  resultScreen.classList.remove("is-hidden");
  resultStudent.textContent = student.name;
  scoreValue.textContent = `${score}/${questions.length}`;
  scorePercent.textContent = `${percent}%`;
  levelFeedback.textContent = getFeedback(percent);
  sectionResults.innerHTML = getSectionScores().map(({ label, correct, total }) => `
    <div class="section-result">
      <strong>${escapeHtml(label)}</strong>
      <span>${correct}/${total}</span>
    </div>`).join("");
  shareStatus.textContent = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getWrittenShareLines() {
  // A segunda sessão de escrita poderá acrescentar as respostas aqui.
  return [];
}

function buildShareText() {
  const score = getScore();
  const percent = Math.round((score / questions.length) * 100);
  const sectionLines = getSectionScores().map(({ label, correct, total }) => `${label}: ${correct}/${total}`);
  const writtenLines = getWrittenShareLines();

  return [
    "Avaliação de Inglês — resultado",
    `Aluno: ${student.name}`,
    `Acertos: ${score}/${questions.length} (${percent}%)`,
    "",
    ...sectionLines,
    ...(writtenLines.length ? ["", "Respostas escritas:", ...writtenLines] : []),
  ].join("\n");
}

async function copyShareText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function shareResults() {
  const text = buildShareText();
  shareStatus.textContent = "";

  try {
    if (navigator.share) {
      await navigator.share({ title: "Resultado da Avaliação de Inglês", text });
      shareStatus.textContent = "Resultado compartilhado.";
      return;
    }

    await copyShareText(text);
    shareStatus.textContent = "Resultado copiado para a área de transferência.";
  } catch (error) {
    if (error?.name === "AbortError") return;

    try {
      await copyShareText(text);
      shareStatus.textContent = "Resultado copiado para a área de transferência.";
    } catch {
      shareStatus.textContent = "Não foi possível compartilhar neste navegador.";
    }
  }
}

function submitAssessment() {
  const unanswered = answers.map((answer, index) => (answer === null ? index : null)).filter((index) => index !== null);

  if (unanswered.length) {
    goToQuestion(unanswered[0]);
    quizMessage.textContent = `Ainda faltam ${unanswered.length} ${unanswered.length === 1 ? "questão" : "questões"}.`;
    return;
  }

  assessmentCompleted = true;
  saveProgress();
  showResults();
}

function openSettingsMenu() {
  settingsMenu.classList.remove("is-hidden");
  settingsButton.setAttribute("aria-expanded", "true");
}

function closeSettingsMenu() {
  settingsMenu.classList.add("is-hidden");
  settingsButton.setAttribute("aria-expanded", "false");
}

function openResetDialog() {
  closeSettingsMenu();
  if (typeof resetDialog.showModal === "function") resetDialog.showModal();
  else if (confirm("Apagar todas as respostas e voltar ao início?")) resetAssessment();
}

function resetAssessment() {
  clearProgress();
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  student = { name: "" };
  assessmentCompleted = false;
  studentForm.reset();
  hideAllScreens();
  startScreen.classList.remove("is-hidden");
  closeSettingsMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => studentNameInput.focus(), 100);
}

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = studentNameInput.value.trim();
  if (!name) return;

  student = { name };
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  assessmentCompleted = false;
  saveProgress();
  startQuiz();
});

prevButton.addEventListener("click", () => goToQuestion(currentQuestion - 1));
nextButton.addEventListener("click", () => goToQuestion(currentQuestion + 1));
submitButton.addEventListener("click", submitAssessment);
shareResultsButton.addEventListener("click", shareResults);

overviewButton.addEventListener("click", () => {
  const opening = overview.classList.contains("is-hidden");
  overview.classList.toggle("is-hidden");
  overviewButton.textContent = opening ? "Ocultar mapa de questões" : "Ver questões respondidas";
});

settingsButton.addEventListener("click", () => {
  if (settingsMenu.classList.contains("is-hidden")) openSettingsMenu();
  else closeSettingsMenu();
});

resetAssessmentButton.addEventListener("click", openResetDialog);
resultSettingsButton.addEventListener("click", openResetDialog);
restartButton.addEventListener("click", openResetDialog);
confirmResetButton.addEventListener("click", resetAssessment);

document.addEventListener("click", (event) => {
  if (!settingsMenu.contains(event.target) && !settingsButton.contains(event.target)) closeSettingsMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSettingsMenu();
});

window.addEventListener("pagehide", saveProgress);
window.addEventListener("beforeunload", saveProgress);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveProgress();
});

if (restoreProgress()) {
  studentNameInput.value = student.name;
  if (assessmentCompleted) showResults();
  else startQuiz();
}
