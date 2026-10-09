const questions = [
  // A1 — 6
  { id: "d001", level: "A1", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the option that completes the sentence.", template: "Maria is my friend. {{answer}} is very nice.", options: ["He", "She", "It", "They"], answer: 1 },
  { id: "d002", level: "A1", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the option that completes the sentence.", template: "My parents {{answer}} at home.", options: ["am", "is", "are", "be"], answer: 2 },
  { id: "d003", level: "A1", skill: "Grammar", section: "Grammar", type: "choice", text: "Choose the correct question.", options: ["You are happy?", "Are you happy?", "Is you happy?", "Do you are happy?"], answer: 1 },
  { id: "d004", level: "A1", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the correct possessive word.", template: "This is John. {{answer}} favorite color is blue.", options: ["Her", "His", "Their", "Its"], answer: 1 },
  { id: "d005", level: "A1", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the word that best completes the situation.", template: "I need some water. I’m very {{answer}}.", options: ["hungry", "thirsty", "angry", "early"], answer: 1 },
  { id: "d006", level: "A1", skill: "Vocabulary", section: "Visual English", type: "visual", visual: "cat-under-table", text: "Look at the picture. Where is the cat?", options: ["Under the table", "On the table", "Behind the table", "Between two tables"], answer: 0 },

  // A2 — 8
  { id: "d007", level: "A2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the option that completes the question.", template: "Where {{answer}} you go yesterday?", options: ["were", "are", "did", "do"], answer: 2 },
  { id: "d008", level: "A2", skill: "Grammar", section: "Grammar", type: "complete", text: "Look at those dark clouds.", template: "It {{answer}} rain.", options: ["is going to", "was", "did", "has"], answer: 0 },
  { id: "d009", level: "A2", skill: "Everyday English", section: "Everyday English", type: "dialogue", text: "Choose the most natural reply.", context: "A: There’s no milk left!\nB: ______", options: ["I was buying some.", "I’m going buy some.", "I’ll buy some.", "I bought some."], answer: 2 },
  { id: "d010", level: "A2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the correct comparative.", template: "My brother is {{answer}} than me.", options: ["tall", "tallest", "taller", "more tall"], answer: 2 },
  { id: "d011", level: "A2", skill: "Grammar", section: "Grammar", type: "choice", text: "Which sentence talks about a life experience without saying exactly when it happened?", options: ["I have travelled to Argentina.", "I travelled to Argentina last year.", "I am travelling to Argentina now.", "I travel to Argentina every year."], answer: 0 },
  { id: "d012", level: "A2", skill: "Vocabulary", section: "Vocabulary", type: "visual", visual: "hotel-trip", text: "Which verb best completes the travel plan shown in the picture?", context: "Before the trip, we need to ___ a hotel room.", options: ["book", "drive", "wear", "borrow"], answer: 0 },
  { id: "d013", level: "A2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the option that completes the sentence.", template: "I’ve lived here {{answer}} 2022.", options: ["for", "since", "during", "from"], answer: 1 },
  { id: "d014", level: "A2", skill: "Grammar", section: "Grammar", type: "complete", text: "Complete the First Conditional.", template: "If it rains tomorrow, we {{answer}} at home.", options: ["stayed", "will stay", "would stay", "stay yesterday"], answer: 1 },

  // B1 — 10
  { id: "d015", level: "B1", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the pair that makes the sentence correct.", template: "I {{0}} Emma since school, but I {{1}} her at a conference last year.", options: ["haven’t seen / saw", "didn’t see / have seen", "haven’t saw / see", "don’t see / saw"], fills: [["haven’t seen", "saw"], ["didn’t see", "have seen"], ["haven’t saw", "see"], ["don’t see", "saw"]], answer: 0 },
  { id: "d016", level: "B1", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the best option.", template: "When I was a child, I {{answer}} spend every summer at my grandparents’ house.", options: ["used to", "am used to", "use", "would have"], answer: 0 },
  { id: "d017", level: "B1", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the natural collocation.", template: "We need to {{answer}} a decision before Friday.", options: ["do", "make", "build", "perform"], answer: 1 },
  { id: "d018", level: "B1", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the correct phrasal verb.", template: "The meeting was {{answer}} until next Monday.", options: ["put off", "put away", "put out", "put up"], answer: 0 },
  { id: "d019", level: "B1", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the correct relative word.", template: "The woman {{answer}} works at reception was very helpful.", options: ["which", "whose", "who", "where"], answer: 2 },
  { id: "d020", level: "B1", skill: "Grammar", section: "Grammar", type: "complete", text: "Complete the Second Conditional.", template: "If I had more free time, I {{answer}} another language.", options: ["learn", "will learn", "would learn", "learned yesterday"], answer: 2 },
  { id: "d021", level: "B1", skill: "Grammar", section: "Grammar", type: "choice", text: "Choose the best reported version of: “I’m tired,” Anna said.", options: ["Anna said that she was tired.", "Anna said that I am tired.", "Anna told that she tired.", "Anna said she is tire."], answer: 0 },
  { id: "d022", level: "B1", skill: "Everyday English", section: "Everyday English", type: "dialogue", text: "What does the speaker mean?", context: "“I’m afraid I won’t be able to make it tonight.”", options: ["They are frightened of the evening.", "They will probably arrive early.", "They cannot attend tonight.", "They want someone to build something."], answer: 2 },
  { id: "d023", level: "B1", skill: "Vocabulary", section: "Visual English", type: "visual", visual: "missed-bus", text: "Which sentence best describes the situation?", options: ["She is waiting calmly for a bus that has not arrived yet.", "She appears to be trying to catch a bus that is leaving.", "She has just got off the bus and is walking home.", "She is driving the bus to work."], answer: 1 },
  { id: "d024", level: "B1", skill: "Meaning", section: "Meaning", type: "paraphrase", text: "Choose the sentence with the same meaning.", context: "I started working here three years ago.", options: ["I worked here three years ago.", "I have worked here for three years.", "I work here since three years.", "I had worked here for three years."], answer: 1 },

  // B2 — 10
  { id: "d025", level: "B2", skill: "Grammar", section: "Grammar", type: "complete", text: "Complete the Third Conditional.", template: "If I {{answer}} about the delay, I would have taken another train.", options: ["knew", "had known", "would know", "have known"], answer: 1 },
  { id: "d026", level: "B2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the option that makes the mixed conditional correct.", template: "If she had accepted the job in London, she {{answer}} there now.", options: ["would live", "would have lived", "will live", "lived"], answer: 0 },
  { id: "d027", level: "B2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the best modal form.", template: "He isn’t answering his phone. He {{answer}} it at home.", options: ["must have left", "must leave", "should leave", "can leave"], answer: 0 },
  { id: "d028", level: "B2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the best form.", template: "I wish I {{answer}} more carefully before sending that message.", options: ["think", "had thought", "would think", "have thought"], answer: 1 },
  { id: "d029", level: "B2", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the verb that fits the context most naturally.", template: "The company plans to {{answer}} the new policy gradually over the next six months.", options: ["implement", "manufacture", "perform", "compose"], answer: 0 },
  { id: "d030", level: "B2", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the phrasal verb that best completes the sentence.", template: "We need to {{answer}} a better solution before tomorrow’s meeting.", options: ["come up with", "get away with", "look down on", "run out of"], answer: 0 },
  { id: "d031", level: "B2", skill: "Pragmatics", section: "Formal English", type: "choice", text: "Which sentence is most appropriate in a formal email to a manager?", options: ["Move our meeting. I can’t go.", "Can you change it? Something came up.", "I was wondering whether it might be possible to reschedule our meeting.", "You need to reschedule our meeting, please."], answer: 2 },
  { id: "d032", level: "B2", skill: "Meaning", section: "Meaning", type: "complete", text: "Choose the discourse marker that best fits the relationship between the ideas.", template: "The evidence is still limited. {{answer}}, the preliminary findings are promising.", options: ["Nevertheless", "Therefore", "Because", "In case"], answer: 0 },
  { id: "d033", level: "B2", skill: "Meaning", section: "Meaning", type: "paraphrase", text: "Choose the sentence with the same meaning.", context: "Despite being exhausted, she finished the report.", options: ["Because she was exhausted, she finished the report.", "Although she was exhausted, she finished the report.", "She finished the report so that she became exhausted.", "She finished the report unless she was exhausted."], answer: 1 },
  { id: "d034", level: "B2", skill: "Vocabulary", section: "Vocabulary", type: "choice", text: "Which option is the most natural?", options: ["The results did a strong impression on the committee.", "The results made a strong impression on the committee.", "The results created a heavy impression in the committee.", "The results performed a strong impression to the committee."], answer: 1 },

  // C1 — 6
  { id: "d035", level: "C1", skill: "Grammar", section: "Advanced English", type: "complete", text: "Choose the grammatically correct inversion.", template: "Rarely {{answer}} such an impressive performance.", options: ["I have seen", "have I seen", "I saw", "did I have seen"], answer: 1 },
  { id: "d036", level: "C1", skill: "Vocabulary", section: "Meaning & nuance", type: "choice", text: "What does “albeit” mean in this sentence?", context: "The proposal is promising, albeit somewhat expensive.", options: ["although", "therefore", "because", "unless"], answer: 0 },
  { id: "d037", level: "C1", skill: "Pragmatics", section: "Meaning & nuance", type: "choice", text: "Which version is the most appropriately cautious for an academic report?", options: ["This proves that the treatment always works.", "The findings appear to suggest that the treatment may be effective.", "Obviously, the treatment works perfectly.", "There is no doubt whatsoever that the treatment works."], answer: 1 },
  { id: "d038", level: "C1", skill: "Meaning", section: "Meaning & nuance", type: "choice", text: "What is the speaker really saying?", context: "“I wouldn’t say the project was a complete failure, but the results fell somewhat short of our expectations.”", options: ["The project was extremely successful.", "The project failed completely.", "The results were disappointing, though not entirely unsuccessful.", "The speaker has no opinion about the results."], answer: 2 },
  { id: "d039", level: "C1", skill: "Vocabulary", section: "Meaning & nuance", type: "complete", text: "Choose the word that best captures the nuance.", template: "She agreed to take the role, but she seemed rather {{answer}} about the extra responsibility.", options: ["reluctant", "portable", "inevitable", "edible"], answer: 0 },
  { id: "d040", level: "C1", skill: "Meaning", section: "Meaning & nuance", type: "choice", text: "Which sentence best preserves the meaning?", context: "The new policy is unlikely to be welcomed by everyone, not least because of its cost.", options: ["Everyone will probably welcome the policy because it is cheap.", "The cost is one important reason why some people may oppose the policy.", "The policy has already been rejected by everyone.", "Cost has nothing to do with people’s reaction to the policy."], answer: 1 },
];

const readingPassages = [
  {
    id: "rpass1",
    title: "A Different Kind of Commute",
    label: "Text 1",
    text: `When Maya accepted a new job across the city, she expected her daily commute to be exhausting. Driving during rush hour often took more than an hour, and parking near the office was expensive. After a few weeks, a colleague suggested cycling part of the way and taking the train for the rest of the journey.

At first, Maya was doubtful. She had not ridden a bicycle regularly since she was a teenager, and she worried about arriving at work tired. Still, she decided to try the new route for one week. To her surprise, the journey was usually faster than driving, especially on busy mornings. She also found that the short cycle helped her feel more awake before work.

The change was not perfect. Rainy days were inconvenient, and carrying a laptop on the bicycle required some planning. However, after two months, Maya had sold her monthly parking pass and was using the car only when necessary. She says the biggest difference is not the money she saves but the fact that her commute no longer feels like wasted time.`,
    questions: [
      { id: "r001", level: "B1", skill: "Reading", text: "Why did Maya first consider changing her commute?", options: ["Her car had broken down.", "Driving was slow and parking was costly.", "Her employer banned cars.", "She wanted to train for a race."], answer: 1 },
      { id: "r002", level: "B1", skill: "Reading", text: "What surprised Maya after she tried the new route?", options: ["Cycling was more expensive than driving.", "The train was always empty.", "The journey was often quicker than driving.", "She became tired before work."], answer: 2 },
      { id: "r003", level: "B1", skill: "Reading", text: "In the text, “doubtful” is closest in meaning to:", options: ["uncertain", "angry", "excited", "careless"], answer: 0 },
      { id: "r004", level: "B1", skill: "Reading", text: "What can we infer about Maya now?", options: ["She never uses her car anymore.", "She prefers the new commute despite some disadvantages.", "She plans to move closer to work immediately.", "She dislikes cycling more than before."], answer: 1 },
    ],
  },
  {
    id: "rpass2",
    title: "When Convenience Changes Our Choices",
    label: "Text 2",
    text: `Digital services are often praised for making everyday decisions easier. A streaming platform recommends what to watch, a shopping app suggests what to buy, and a map application chooses the fastest route. These systems reduce the effort required to compare options, which is undeniably useful when people are busy. Yet convenience can have a less obvious consequence: it may gradually narrow the range of choices people seriously consider.

Recommendation systems usually learn from previous behaviour. If a person frequently watches crime dramas, the platform becomes increasingly confident that similar programmes are a safe suggestion. From the company’s perspective, this is sensible: a recommendation that matches existing preferences is more likely to keep the user engaged. The difficulty is that repeated exposure to familiar material can create a feedback loop. People may believe they are freely choosing from a huge catalogue while, in practice, they repeatedly encounter a relatively small portion of it.

This does not mean recommendation systems are inherently harmful. They can help users discover books, music or films they would never have found on their own. The important issue is whether the system merely predicts our preferences or begins to shape them. One possible response is to design services that occasionally introduce deliberate variety rather than optimising every suggestion for immediate appeal. Such an approach might feel slightly less convenient, but it could preserve something that efficiency tends to overlook: the value of being surprised.`,
    questions: [
      { id: "r005", level: "B2", skill: "Reading", text: "What is the central concern raised by the author?", options: ["Digital services are too difficult to use.", "Recommendation systems may limit the range of choices users genuinely encounter.", "People should stop using streaming platforms entirely.", "Companies do not collect enough information about users."], answer: 1 },
      { id: "r006", level: "B2", skill: "Reading", text: "What does “feedback loop” refer to in this context?", options: ["Users complain and companies immediately refund them.", "Past choices lead to similar recommendations, which can encourage more similar choices.", "Platforms deliberately show users content they dislike.", "People repeatedly change their preferences at random."], answer: 1 },
      { id: "r007", level: "B2", skill: "Reading", text: "Which statement best describes the author’s position?", options: ["Strongly opposed to all recommendation technology.", "Entirely enthusiastic about personalised systems.", "Balanced: useful technology can still have unintended effects.", "Indifferent to how digital platforms influence users."], answer: 2 },
      { id: "r008", level: "C1", skill: "Reading", text: "In the final paragraph, the author suggests that “the value of being surprised” is something that:", options: ["can be lost when systems focus too heavily on efficiency and predictability.", "users generally find annoying and should avoid.", "companies already prioritise above engagement.", "has no relationship to variety or discovery."], answer: 0 },
    ],
  },
];

const writingTasks = [
  {
    id: "w001",
    title: "Writing 1 · Functional message",
    target: "60–100 words",
    prompt: "You booked a hotel room for a trip, but you noticed that the dates on the reservation are wrong. Write a message to the hotel. Explain the problem, give the correct dates, and ask them to confirm the change.",
  },
  {
    id: "w002",
    title: "Writing 2 · Opinion",
    target: "100–150 words",
    prompt: "Some people think technology makes our lives easier, while others think it creates new problems. What do you think? Give reasons and examples to support your opinion.",
  },
];

const ASSESSMENT_VERSION = "diagnostic-2026-10-v1";
const STORAGE_KEY = "englishAssessmentProgress";
const LEGACY_STORAGE_KEYS = ["englishAssessmentProgressV2", "englishAssessmentProgressV1"];
const OLD_PERSISTENCE_PREF_KEY = "englishAssessmentPersistenceEnabled";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const startScreen = $("#startScreen");
const quizScreen = $("#quizScreen");
const readingScreen = $("#readingScreen");
const writingScreen = $("#writingScreen");
const resultScreen = $("#resultScreen");
const studentForm = $("#studentForm");
const studentNameInput = $("#studentName");
const studentSummary = $("#studentSummary");
const questionCounter = $("#questionCounter");
const progressBar = $("#progressBar");
const questionSection = $("#questionSection");
const questionType = $("#questionType");
const questionText = $("#questionText");
const questionContext = $("#questionContext");
const questionInteraction = $("#questionInteraction");
const questionVisual = $("#questionVisual");
const optionsContainer = $("#options");
const quizMessage = $("#quizMessage");
const prevButton = $("#prevButton");
const nextButton = $("#nextButton");
const toReadingButton = $("#toReadingButton");
const overviewButton = $("#overviewButton");
const overview = $("#overview");
const settingsButton = $("#settingsButton");
const settingsMenu = $("#settingsMenu");
const resetAssessmentButton = $("#resetAssessmentButton");
const readingContainer = $("#readingContainer");
const readingMessage = $("#readingMessage");
const backToQuizButton = $("#backToQuizButton");
const toWritingButton = $("#toWritingButton");
const writingContainer = $("#writingContainer");
const writingMessage = $("#writingMessage");
const backToReadingButton = $("#backToReadingButton");
const finishAssessmentButton = $("#finishAssessmentButton");
const resetDialog = $("#resetDialog");
const confirmResetButton = $("#confirmResetButton");
const resultSettingsButton = $("#resultSettingsButton");
const resultStudent = $("#resultStudent");
const scoreValue = $("#scoreValue");
const scorePercent = $("#scorePercent");
const levelResults = $("#levelResults");
const skillResults = $("#skillResults");
const shareResultsButton = $("#shareResultsButton");
const shareStatus = $("#shareStatus");
const restartButton = $("#restartButton");

let currentQuestion = 0;
let objectiveAnswers = Object.fromEntries(questions.map((q) => [q.id, null]));
let readingAnswers = Object.fromEntries(readingPassages.flatMap((p) => p.questions.map((q) => [q.id, null])));
let writingResponses = Object.fromEntries(writingTasks.map((task) => [task.id, ""]));
let student = { name: "" };
let currentStage = "start";
let assessmentCompleted = false;

localStorage.removeItem(OLD_PERSISTENCE_PREF_KEY);

const typeLabels = {
  complete: "Complete",
  choice: "Choose",
  dialogue: "Context",
  paraphrase: "Same meaning",
  visual: "Visual",
};

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function countWords(value) {
  const cleaned = String(value).trim();
  return cleaned ? cleaned.split(/\s+/).length : 0;
}

function buildStoredPayload() {
  const objective = {};
  questions.forEach((question) => {
    const answerIndex = objectiveAnswers[question.id];
    if (Number.isInteger(answerIndex)) objective[question.id] = question.options[answerIndex];
  });

  const reading = {};
  readingPassages.forEach((passage) => passage.questions.forEach((question) => {
    const answerIndex = readingAnswers[question.id];
    if (Number.isInteger(answerIndex)) reading[question.id] = question.options[answerIndex];
  }));

  return {
    schemaVersion: 3,
    assessmentVersion: ASSESSMENT_VERSION,
    student,
    currentStage,
    currentQuestionId: questions[currentQuestion]?.id || questions[0].id,
    objective,
    reading,
    writing: writingResponses,
    completed: assessmentCompleted,
    savedAt: new Date().toISOString(),
  };
}

function saveProgress() {
  if (!student.name) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(buildStoredPayload()));
  } catch {
    // Storage may be unavailable in some private browsing modes.
  }
}

function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
  LEGACY_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
}

function restoreChoice(question, storedValue) {
  if (typeof storedValue === "string") {
    const index = question.options.indexOf(storedValue);
    return index >= 0 ? index : null;
  }
  if (Number.isInteger(storedValue) && storedValue >= 0 && storedValue < question.options.length) return storedValue;
  return null;
}

function restoreProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved?.student?.name) return false;

    student = { name: saved.student.name };

    if (saved.assessmentVersion !== ASSESSMENT_VERSION || saved.schemaVersion !== 3) {
      // The assessment was substantially redesigned. Preserve the name, but not incompatible answers.
      currentStage = "start";
      clearProgress();
      studentNameInput.value = student.name;
      return false;
    }

    questions.forEach((question) => {
      objectiveAnswers[question.id] = restoreChoice(question, saved.objective?.[question.id]);
    });
    readingPassages.forEach((passage) => passage.questions.forEach((question) => {
      readingAnswers[question.id] = restoreChoice(question, saved.reading?.[question.id]);
    }));
    writingTasks.forEach((task) => {
      writingResponses[task.id] = typeof saved.writing?.[task.id] === "string" ? saved.writing[task.id] : "";
    });

    const savedIndex = questions.findIndex((q) => q.id === saved.currentQuestionId);
    currentQuestion = savedIndex >= 0 ? savedIndex : 0;
    currentStage = ["quiz", "reading", "writing", "result"].includes(saved.currentStage) ? saved.currentStage : "quiz";
    assessmentCompleted = Boolean(saved.completed);
    return true;
  } catch {
    return false;
  }
}

function hideAllScreens() {
  [startScreen, quizScreen, readingScreen, writingScreen, resultScreen].forEach((screen) => screen.classList.add("is-hidden"));
}

function showStage(stage) {
  hideAllScreens();
  currentStage = stage;
  if (stage === "quiz") {
    quizScreen.classList.remove("is-hidden");
    renderQuestion();
    renderOverview();
  } else if (stage === "reading") {
    readingScreen.classList.remove("is-hidden");
    renderReading();
  } else if (stage === "writing") {
    writingScreen.classList.remove("is-hidden");
    renderWriting();
  } else if (stage === "result") {
    resultScreen.classList.remove("is-hidden");
    renderResults();
  } else {
    startScreen.classList.remove("is-hidden");
  }
  saveProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCompleteSentence(question, selectedAnswer) {
  let html = escapeHtml(question.template);
  if (question.fills) {
    const fills = Number.isInteger(selectedAnswer) ? question.fills[selectedAnswer] : [];
    html = html.replace(/\{\{(\d+)\}\}/g, (_, index) => {
      const value = fills?.[Number(index)];
      return value ? `<span class="inline-answer is-filled">${escapeHtml(value)}</span>` : `<span class="inline-answer">&nbsp;</span>`;
    });
  } else {
    const value = Number.isInteger(selectedAnswer) ? question.options[selectedAnswer] : null;
    html = html.replace(/\{\{answer\}\}/g, value ? `<span class="inline-answer is-filled">${escapeHtml(value)}</span>` : `<span class="inline-answer">&nbsp;</span>`);
  }
  questionInteraction.innerHTML = `<div class="sentence-builder" aria-live="polite">${html}</div>`;
}

function renderContext(question) {
  if (!question.context) {
    questionContext.innerHTML = "";
    return;
  }
  const lines = escapeHtml(question.context).replaceAll("\n", "<br>");
  questionContext.innerHTML = `<div class="context-card">${lines}</div>`;
}

function renderVisual(name) {
  if (name === "cat-under-table") {
    questionVisual.innerHTML = `<div class="visual-scene" aria-label="A cat is under a table"><div class="table-scene"><div class="table-top"></div><div class="table-leg left"></div><div class="table-leg right"></div><div class="cat-emoji">🐱</div></div><p class="scene-caption">Look at the position</p></div>`;
    return;
  }
  if (name === "hotel-trip") {
    questionVisual.innerHTML = `<div class="visual-scene" aria-label="Suitcase, hotel and calendar"><div class="scene-row"><span>🧳</span><span>🏨</span><span>📅</span></div><p class="scene-caption">Travel plan</p></div>`;
    return;
  }
  if (name === "missed-bus") {
    questionVisual.innerHTML = `<div class="visual-scene" aria-label="A person runs toward a bus that is leaving"><div class="scene-row"><span>🏃‍♀️</span><span>💨</span><span>🚌</span></div><p class="scene-caption">What is probably happening?</p></div>`;
    return;
  }
  questionVisual.innerHTML = "";
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const selectedAnswer = objectiveAnswers[question.id];

  studentSummary.textContent = student.name;
  questionCounter.textContent = `${currentQuestion + 1} / ${questions.length}`;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  questionSection.textContent = question.section;
  questionType.textContent = typeLabels[question.type] || "Choose";
  questionText.textContent = question.text;
  quizMessage.textContent = "";

  renderContext(question);
  if (question.type === "complete") renderCompleteSentence(question, selectedAnswer);
  else questionInteraction.innerHTML = "";
  renderVisual(question.visual);

  optionsContainer.className = `options ${question.type === "complete" ? "options-compact" : ""}`;
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${selectedAnswer === index ? " is-selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", selectedAnswer === index ? "true" : "false");
    button.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span>`;
    button.addEventListener("click", () => {
      objectiveAnswers[question.id] = index;
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
  toReadingButton.classList.toggle("is-hidden", !isLast);
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
  questions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    button.classList.toggle("is-answered", Number.isInteger(objectiveAnswers[question.id]));
    button.classList.toggle("is-current", index === currentQuestion);
    button.addEventListener("click", () => goToQuestion(index));
    overview.appendChild(button);
  });
}

function unansweredObjectiveIndexes() {
  return questions.map((question, index) => Number.isInteger(objectiveAnswers[question.id]) ? null : index).filter((value) => value !== null);
}

function renderReading() {
  readingMessage.textContent = "";
  readingContainer.innerHTML = readingPassages.map((passage) => `
    <article class="reading-card">
      <p class="reading-label">${escapeHtml(passage.label)}</p>
      <h2>${escapeHtml(passage.title)}</h2>
      <div class="reading-text">${escapeHtml(passage.text)}</div>
      ${passage.questions.map((question, qIndex) => `
        <section class="reading-question">
          <h3>${qIndex + 1}. ${escapeHtml(question.text)}</h3>
          <div class="reading-options" data-reading-id="${question.id}">
            ${question.options.map((option, index) => `<button type="button" class="reading-option${readingAnswers[question.id] === index ? " is-selected" : ""}" data-index="${index}">${String.fromCharCode(65 + index)}. ${escapeHtml(option)}</button>`).join("")}
          </div>
        </section>`).join("")}
    </article>`).join("");

  $$(".reading-options").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        readingAnswers[group.dataset.readingId] = Number(button.dataset.index);
        assessmentCompleted = false;
        saveProgress();
        renderReading();
      });
    });
  });
}

function getUnansweredReadingIds() {
  return readingPassages.flatMap((p) => p.questions).filter((q) => !Number.isInteger(readingAnswers[q.id])).map((q) => q.id);
}

function renderWriting() {
  writingMessage.textContent = "";
  writingContainer.innerHTML = writingTasks.map((task) => `
    <article class="writing-card">
      <p class="writing-label">${escapeHtml(task.title)}</p>
      <div class="writing-prompt">${escapeHtml(task.prompt)}</div>
      <textarea id="${task.id}" data-writing-id="${task.id}" placeholder="Write your answer in English...">${escapeHtml(writingResponses[task.id])}</textarea>
      <div class="writing-meta"><span>Suggested: ${escapeHtml(task.target)}</span><span id="${task.id}-count">${countWords(writingResponses[task.id])} words</span></div>
    </article>`).join("");

  $$("textarea[data-writing-id]").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      const id = textarea.dataset.writingId;
      writingResponses[id] = textarea.value;
      $(`#${id}-count`).textContent = `${countWords(textarea.value)} words`;
      assessmentCompleted = false;
      saveProgress();
    });
  });
}

function getObjectiveScore() {
  return questions.reduce((total, question) => total + (objectiveAnswers[question.id] === question.answer ? 1 : 0), 0);
}

function getReadingScore() {
  return readingPassages.flatMap((p) => p.questions).reduce((total, question) => total + (readingAnswers[question.id] === question.answer ? 1 : 0), 0);
}

function getAllScoredItems() {
  const objectiveItems = questions.map((question) => ({ ...question, selected: objectiveAnswers[question.id] }));
  const readingItems = readingPassages.flatMap((p) => p.questions).map((question) => ({ ...question, selected: readingAnswers[question.id] }));
  return [...objectiveItems, ...readingItems];
}

function groupScores(field, order) {
  const groups = new Map(order.map((key) => [key, { label: key, correct: 0, total: 0 }]));
  getAllScoredItems().forEach((item) => {
    const key = item[field];
    if (!groups.has(key)) groups.set(key, { label: key, correct: 0, total: 0 });
    const group = groups.get(key);
    group.total += 1;
    if (item.selected === item.answer) group.correct += 1;
  });
  return [...groups.values()].filter((group) => group.total > 0);
}

function renderScoreRows(container, rows) {
  container.innerHTML = rows.map(({ label, correct, total }) => {
    const percent = Math.round((correct / total) * 100);
    return `<div class="section-result"><strong>${escapeHtml(label)}</strong><span>${correct}/${total} · ${percent}%</span></div>`;
  }).join("");
}

function renderResults() {
  const objectiveScore = getObjectiveScore();
  const readingScore = getReadingScore();
  const total = questions.length + readingPassages.flatMap((p) => p.questions).length;
  const score = objectiveScore + readingScore;
  const percent = Math.round((score / total) * 100);

  resultStudent.textContent = student.name;
  scoreValue.textContent = `${score}/${total}`;
  scorePercent.textContent = `${percent}%`;
  renderScoreRows(levelResults, groupScores("level", ["A1", "A2", "B1", "B2", "C1"]));
  renderScoreRows(skillResults, groupScores("skill", ["Grammar", "Vocabulary", "Everyday English", "Pragmatics", "Meaning", "Reading"]));
  shareStatus.textContent = "";
}

function buildShareText() {
  const objectiveScore = getObjectiveScore();
  const readingScore = getReadingScore();
  const total = questions.length + readingPassages.flatMap((p) => p.questions).length;
  const totalScore = objectiveScore + readingScore;
  const percent = Math.round((totalScore / total) * 100);
  const levelLines = groupScores("level", ["A1", "A2", "B1", "B2", "C1"]).map(({ label, correct, total }) => `- ${label}: ${correct}/${total}`);
  const skillLines = groupScores("skill", ["Grammar", "Vocabulary", "Everyday English", "Pragmatics", "Meaning", "Reading"]).map(({ label, correct, total }) => `- ${label}: ${correct}/${total}`);

  return [
    "AVALIAÇÃO DIAGNÓSTICA DE INGLÊS",
    `Aluno(a): ${student.name}`,
    "",
    `Pontuação automática: ${totalScore}/${total} (${percent}%)`,
    `Questões objetivas: ${objectiveScore}/${questions.length}`,
    `Leitura: ${readingScore}/8`,
    "",
    "Evidência por faixa:",
    ...levelLines,
    "",
    "Competências automáticas:",
    ...skillLines,
    "",
    `WRITING 1 (${countWords(writingResponses.w001)} words):`,
    writingResponses.w001.trim() || "[sem resposta]",
    "",
    `WRITING 2 (${countWords(writingResponses.w002)} words):`,
    writingResponses.w002.trim() || "[sem resposta]",
  ].join("\n");
}

async function copyShareText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
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
      await navigator.share({ title: "Avaliação diagnóstica de inglês", text });
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
  currentQuestion = 0;
  objectiveAnswers = Object.fromEntries(questions.map((q) => [q.id, null]));
  readingAnswers = Object.fromEntries(readingPassages.flatMap((p) => p.questions.map((q) => [q.id, null])));
  writingResponses = Object.fromEntries(writingTasks.map((task) => [task.id, ""]));
  student = { name: "" };
  currentStage = "start";
  assessmentCompleted = false;
  studentForm.reset();
  hideAllScreens();
  startScreen.classList.remove("is-hidden");
  if (resetDialog.open) resetDialog.close();
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => studentNameInput.focus(), 100);
}

studentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = studentNameInput.value.trim();
  if (!name) return;
  student = { name };
  currentStage = "quiz";
  saveProgress();
  showStage("quiz");
});

prevButton.addEventListener("click", () => goToQuestion(currentQuestion - 1));
nextButton.addEventListener("click", () => goToQuestion(currentQuestion + 1));
toReadingButton.addEventListener("click", () => {
  const unanswered = unansweredObjectiveIndexes();
  if (unanswered.length) {
    goToQuestion(unanswered[0]);
    quizMessage.textContent = `Ainda faltam ${unanswered.length} ${unanswered.length === 1 ? "questão" : "questões"} nesta parte.`;
    return;
  }
  showStage("reading");
});

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
$$('.stage-reset-button').forEach((button) => button.addEventListener("click", openResetDialog));
resultSettingsButton.addEventListener("click", openResetDialog);
restartButton.addEventListener("click", openResetDialog);
confirmResetButton.addEventListener("click", resetAssessment);

backToQuizButton.addEventListener("click", () => showStage("quiz"));
toWritingButton.addEventListener("click", () => {
  const unanswered = getUnansweredReadingIds();
  if (unanswered.length) {
    readingMessage.textContent = `Ainda faltam ${unanswered.length} ${unanswered.length === 1 ? "pergunta" : "perguntas"} de leitura.`;
    document.querySelector(`[data-reading-id="${unanswered[0]}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  showStage("writing");
});

backToReadingButton.addEventListener("click", () => showStage("reading"));
finishAssessmentButton.addEventListener("click", () => {
  const empty = writingTasks.filter((task) => !writingResponses[task.id].trim());
  if (empty.length) {
    writingMessage.textContent = "Responda às duas propostas de escrita antes de finalizar.";
    $(`#${empty[0].id}`)?.focus();
    return;
  }
  assessmentCompleted = true;
  currentStage = "result";
  saveProgress();
  showStage("result");
});

shareResultsButton.addEventListener("click", shareResults);

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
  if (assessmentCompleted || currentStage === "result") showStage("result");
  else showStage(currentStage === "start" ? "quiz" : currentStage);
}
