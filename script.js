const questions = [
  {
    section: "Teens 1 · A1",
    text: "Choose the correct subject pronoun: “Maria is my friend. ___ is very nice.”",
    options: ["He", "She", "It", "They"],
    answer: 1,
  },
  {
    section: "Teens 1 · A1",
    text: "Complete the sentence: “My parents ___ at home.”",
    options: ["am", "is", "are", "be"],
    answer: 2,
  },
  {
    section: "Teens 1 · A1",
    text: "Choose the correct question:",
    options: ["You are happy?", "Are you happy?", "Is you happy?", "Do you are happy?"],
    answer: 1,
  },
  {
    section: "Teens 1 · A1",
    text: "Choose the correct negative sentence:",
    options: ["He not is tired.", "He doesn’t tired.", "He isn’t tired.", "He don’t tired."],
    answer: 2,
  },
  {
    section: "Teens 1 · A1",
    text: "Which sentence is correct?",
    options: [
      "I have something for you.",
      "I have anything for you.",
      "I am something for you.",
      "I has something for you.",
    ],
    answer: 0,
  },
  {
    section: "Teens 1 · A1",
    text: "Complete the sentence: “This is John. ___ favorite color is blue.”",
    options: ["Her", "His", "Their", "Its"],
    answer: 1,
  },
  {
    section: "Teens 1 · A1",
    text: "What comes after Wednesday?",
    options: ["Tuesday", "Friday", "Thursday", "Sunday"],
    answer: 2,
  },
  {
    section: "Teens 1 · A1",
    text: "Choose the best answer: “How’s the weather today?”",
    options: ["It’s Monday.", "It’s sunny.", "It’s July.", "It’s twelve."],
    answer: 1,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Complete: “___ a book on the table.”",
    options: ["There are", "There is", "Are there", "They are"],
    answer: 1,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Complete: “___ three students in the classroom.”",
    options: ["There is", "Is there", "There are", "It is"],
    answer: 2,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "The cat is ___ the table.",
    options: ["under", "between", "behind", "far"],
    answer: 0,
    visual: "cat-under-table",
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Choose the Present Continuous sentence:",
    options: [
      "She studies English.",
      "She is studying English.",
      "She studied English.",
      "She will study English.",
    ],
    answer: 1,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Complete: “Look at those dark clouds! It ___ rain.”",
    options: ["is going to", "was", "did", "has"],
    answer: 0,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Someone suddenly says: “There’s no milk!” You decide at that moment to buy some. Choose the best answer:",
    options: ["I was buying some.", "I’m going buy some.", "I’ll buy some.", "I bought some."],
    answer: 2,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Complete: “Yesterday, Sarah ___ at school, but her friends ___ at home.”",
    options: ["were / was", "was / were", "is / are", "did / were"],
    answer: 1,
  },
  {
    section: "Teens 2 · A1–A2",
    text: "Complete the question: “Where ___ you go yesterday?”",
    options: ["were", "are", "did", "do"],
    answer: 2,
  },
  {
    section: "Teens 3 · A2",
    text: "Choose the correct comparative: “My brother is ___ than me.”",
    options: ["tall", "tallest", "taller", "more tall"],
    answer: 2,
  },
  {
    section: "Teens 3 · A2",
    text: "Choose the correct superlative: “This is the ___ building in the city.”",
    options: ["tall", "taller", "tallest", "most tall"],
    answer: 2,
  },
  {
    section: "Teens 3 · A2",
    text: "Complete: “This restaurant is ___ than that one.”",
    options: ["more expensive", "expensiver", "most expensive", "expensive more"],
    answer: 0,
  },
  {
    section: "Teens 3 · A2",
    text: "Choose the correct possessive word: “This cellphone belongs to Sarah. It is ___.”",
    options: ["her", "hers", "she", "his"],
    answer: 1,
  },
  {
    section: "Teens 3 · A2",
    text: "Choose the correct sentence:",
    options: [
      "Our house is bigger than theirs.",
      "Ours house is bigger than their.",
      "Our house is more big than they.",
      "Ours house is biggest than theirs.",
    ],
    answer: 0,
  },
  {
    section: "Teens 3 · A2",
    text: "Which sentence refers to a past life experience?",
    options: [
      "I have traveled to many countries.",
      "I travel tomorrow.",
      "I am travel yesterday.",
      "I will traveled last year.",
    ],
    answer: 0,
  },
  {
    section: "Teens 3 · A2",
    text: "Complete: “When I was a child, I ___ soccer every day.”",
    options: ["play", "played", "playing", "plays"],
    answer: 1,
  },
  {
    section: "Teens 4 · A2",
    text: "Choose the Zero Conditional:",
    options: [
      "If it rains tomorrow, I will stay home.",
      "If I were rich, I would travel.",
      "If you heat ice, it melts.",
      "If I studied, I would pass.",
    ],
    answer: 2,
  },
  {
    section: "Teens 4 · A2",
    text: "Complete the First Conditional: “If it rains tomorrow, we ___ at home.”",
    options: ["stayed", "stay yesterday", "will stay", "would stayed"],
    answer: 2,
  },
  {
    section: "Teens 4 · A2",
    text: "Complete the Second Conditional: “If I had more money, I ___ around the world.”",
    options: ["travel", "will travel", "would travel", "traveled yesterday"],
    answer: 2,
  },
  {
    section: "Teens 4 · A2",
    text: "Which sentence is in the passive voice?",
    options: [
      "Julia bought the book.",
      "Julia is buying the book.",
      "The book was bought by Julia.",
      "Julia buys books.",
    ],
    answer: 2,
  },
  {
    section: "Teens 4 · A2",
    text: "Change the idea to passive voice: “They built a new shopping mall.”",
    options: [
      "A new shopping mall built them.",
      "A new shopping mall was built.",
      "A new shopping mall is build.",
      "A new shopping mall were built.",
    ],
    answer: 1,
  },
  {
    section: "Teens 4 · A2",
    text: "Which word is related to movies?",
    options: ["plot", "bookshelf", "countryside", "newspaper"],
    answer: 0,
  },
  {
    section: "Teens 4 · A2",
    text: "Complete: “Have you ever ___ abroad?”",
    options: ["travel", "travels", "travelled", "travelling"],
    answer: 2,
  },
];

const STORAGE_KEY = "englishAssessmentProgressV1";

const startScreen = document.querySelector("#startScreen");
const quizScreen = document.querySelector("#quizScreen");
const resultScreen = document.querySelector("#resultScreen");
const studentForm = document.querySelector("#studentForm");
const studentNameInput = document.querySelector("#studentName");
const studentClassInput = document.querySelector("#studentClass");
const studentSummary = document.querySelector("#studentSummary");
const questionCounter = document.querySelector("#questionCounter");
const progressBar = document.querySelector("#progressBar");
const questionSection = document.querySelector("#questionSection");
const questionText = document.querySelector("#questionText");
const questionVisual = document.querySelector("#questionVisual");
const optionsContainer = document.querySelector("#options");
const quizMessage = document.querySelector("#quizMessage");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const submitButton = document.querySelector("#submitButton");
const overviewButton = document.querySelector("#overviewButton");
const overview = document.querySelector("#overview");
const resultStudent = document.querySelector("#resultStudent");
const scoreValue = document.querySelector("#scoreValue");
const scorePercent = document.querySelector("#scorePercent");
const levelFeedback = document.querySelector("#levelFeedback");
const sectionResults = document.querySelector("#sectionResults");
const restartButton = document.querySelector("#restartButton");

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let student = { name: "", className: "" };

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function saveProgress() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ student, answers, currentQuestion })
  );
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}

function restoreProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved?.student?.name || !Array.isArray(saved.answers)) return false;

    student = saved.student;
    answers = questions.map((_, index) => saved.answers[index] ?? null);
    currentQuestion = Math.min(Math.max(saved.currentQuestion ?? 0, 0), questions.length - 1);
    return true;
  } catch {
    clearProgress();
    return false;
  }
}

function startQuiz() {
  startScreen.classList.add("is-hidden");
  resultScreen.classList.add("is-hidden");
  quizScreen.classList.remove("is-hidden");
  studentSummary.textContent = `${student.name} · ${student.className}`;
  renderQuestion();
  renderOverview();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];

  questionCounter.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  questionSection.textContent = question.section;
  questionText.textContent = question.text;
  quizMessage.textContent = "";

  if (question.visual === "cat-under-table") {
    questionVisual.innerHTML = `
      <div class="question-visual" aria-label="Ilustração: um gato está embaixo de uma mesa">
        <span class="table-line">▔▔▔▔▔</span>
        <span>🐱</span>
      </div>`;
  } else {
    questionVisual.innerHTML = "";
  }

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

  renderOverview();
}

function goToQuestion(index) {
  currentQuestion = Math.min(Math.max(index, 0), questions.length - 1);
  saveProgress();
  renderQuestion();
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
    button.setAttribute(
      "aria-label",
      `Questão ${index + 1}${answers[index] !== null ? ", respondida" : ", não respondida"}`
    );
    button.addEventListener("click", () => goToQuestion(index));
    overview.appendChild(button);
  });
}

function getScore() {
  return answers.reduce(
    (total, answer, index) => total + (answer === questions[index].answer ? 1 : 0),
    0
  );
}

function getSectionScores() {
  const sections = [
    { label: "Teens 1 · A1", start: 0, end: 7 },
    { label: "Teens 2 · A1–A2", start: 8, end: 15 },
    { label: "Teens 3 · A2", start: 16, end: 22 },
    { label: "Teens 4 · A2", start: 23, end: 29 },
  ];

  return sections.map((section) => {
    const total = section.end - section.start + 1;
    let correct = 0;

    for (let index = section.start; index <= section.end; index += 1) {
      if (answers[index] === questions[index].answer) correct += 1;
    }

    return { ...section, total, correct };
  });
}

function getFeedback(percent) {
  if (percent >= 90) return "Excelente desempenho. Você demonstrou domínio consistente dos conteúdos avaliados.";
  if (percent >= 75) return "Bom desempenho. Os conteúdos principais estão bem consolidados, com alguns pontos para revisar.";
  if (percent >= 60) return "Desempenho intermediário. Vale revisar os conteúdos das questões em que houve mais dificuldade.";
  return "A avaliação indica que uma revisão dos conteúdos-base pode ser útil antes de avançar para estruturas mais complexas.";
}

function submitAssessment() {
  const unanswered = answers
    .map((answer, index) => (answer === null ? index : null))
    .filter((index) => index !== null);

  if (unanswered.length > 0) {
    quizMessage.textContent = `Ainda faltam ${unanswered.length} ${unanswered.length === 1 ? "questão" : "questões"}. Revise antes de enviar.`;
    goToQuestion(unanswered[0]);
    return;
  }

  const score = getScore();
  const percent = Math.round((score / questions.length) * 100);

  quizScreen.classList.add("is-hidden");
  resultScreen.classList.remove("is-hidden");

  resultStudent.textContent = `${student.name} · ${student.className}`;
  scoreValue.textContent = `${score}/${questions.length}`;
  scorePercent.textContent = `${percent}%`;
  levelFeedback.textContent = getFeedback(percent);

  sectionResults.innerHTML = getSectionScores()
    .map(
      ({ label, correct, total }) => `
        <div class="section-result">
          <strong>${escapeHtml(label)}</strong>
          <span>${correct}/${total}</span>
        </div>`
    )
    .join("");

  clearProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  student = {
    name: studentNameInput.value.trim(),
    className: studentClassInput.value.trim(),
  };

  if (!student.name || !student.className) return;

  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  saveProgress();
  startQuiz();
});

prevButton.addEventListener("click", () => goToQuestion(currentQuestion - 1));
nextButton.addEventListener("click", () => goToQuestion(currentQuestion + 1));
submitButton.addEventListener("click", submitAssessment);

overviewButton.addEventListener("click", () => {
  const opening = overview.classList.contains("is-hidden");
  overview.classList.toggle("is-hidden");
  overviewButton.textContent = opening ? "Ocultar mapa de questões" : "Ver questões respondidas";
});

restartButton.addEventListener("click", () => {
  clearProgress();
  answers = Array(questions.length).fill(null);
  currentQuestion = 0;
  student = { name: "", className: "" };
  studentForm.reset();
  resultScreen.classList.add("is-hidden");
  startScreen.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

if (restoreProgress()) {
  studentNameInput.value = student.name;
  studentClassInput.value = student.className;
  startQuiz();
}
