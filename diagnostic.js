// Diagnostic extension: adds 10 scored items and turns the automatic result into a CEFR-oriented diagnostic.
const diagnosticQuestions = [
  // A2 — +2
  { id: "d041", level: "A2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the best quantifier.", template: "There isn't {{answer}} milk left in the fridge.", options: ["many", "much", "a few", "several"], answer: 1 },
  { id: "d042", level: "A2", skill: "Everyday English", section: "Everyday English", type: "dialogue", text: "Choose the most natural response.", context: "A: Excuse me, how do I get to the train station?\nB: ______", options: ["It's about ten minutes on foot. Go straight and turn left at the bank.", "I have gone there yesterday.", "The station is very train.", "You should went straight."], answer: 0 },

  // B1 — +3
  { id: "d043", level: "B1", skill: "Grammar", section: "Grammar", type: "choice", text: "Choose the correct passive sentence.", options: ["They built the bridge in 2018.", "The bridge was built in 2018.", "The bridge built in 2018.", "The bridge was build in 2018."], answer: 1 },
  { id: "d044", level: "B1", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the natural collocation.", template: "Everyone makes mistakes, but you also need to {{answer}} responsibility for them.", options: ["take", "do", "put", "bring"], answer: 0 },
  { id: "d045", level: "B1", skill: "Everyday English", section: "Everyday English", type: "dialogue", text: "What is the most appropriate reply?", context: "A: Would you mind opening the window?\nB: ______", options: ["Not at all.", "Yes, I would opening it.", "I don't mind you are.", "No, I wouldn't to."], answer: 0 },

  // B2 — +3
  { id: "d046", level: "B2", skill: "Grammar", section: "Grammar", type: "complete", text: "Choose the form that best completes the sentence.", template: "I'd rather you {{answer}} me before borrowing my laptop next time.", options: ["ask", "asked", "will ask", "have asked"], answer: 1 },
  { id: "d047", level: "B2", skill: "Vocabulary", section: "Vocabulary", type: "complete", text: "Choose the natural collocation.", template: "The campaign was created to {{answer}} awareness of the risks of distracted driving.", options: ["raise", "rise", "grow up", "lift up"], answer: 0 },
  { id: "d048", level: "B2", skill: "Pragmatics", section: "Meaning", type: "choice", text: "What does the second speaker most likely mean?", context: "A: I think working from home solves almost every workplace problem.\nB: That's one way of looking at it.", options: ["B completely agrees with A.", "B is politely signalling that other views are possible.", "B did not understand what A said.", "B wants to change jobs immediately."], answer: 1 },

  // C1 — +2
  { id: "d049", level: "C1", skill: "Grammar", section: "Advanced English", type: "complete", text: "Choose the grammatically correct inversion.", template: "Not until the data had been reviewed {{answer}} how serious the problem was.", options: ["we realised", "did we realise", "we did realise", "had we realised"], answer: 1 },
  { id: "d050", level: "C1", skill: "Meaning", section: "Meaning & nuance", type: "choice", text: "Which option best captures the meaning of the expression?", context: "Be that as it may, we still need to decide what to do next.", options: ["Because that is certainly true", "Regardless of what has just been said", "Before discussing the previous point", "Only if everyone agrees"], answer: 1 },
];

diagnosticQuestions.forEach((question) => {
  if (!questions.some((existing) => existing.id === question.id)) {
    questions.push(question);
  }
  if (!(question.id in objectiveAnswers)) objectiveAnswers[question.id] = null;
});

// Keep the interface generic while reflecting the expanded assessment.
const objectiveMeta = document.querySelector(".assessment-meta span:first-child");
if (objectiveMeta) objectiveMeta.textContent = `${questions.length} questões objetivas`;
const timeMeta = [...document.querySelectorAll(".assessment-meta span")].find((node) => node.textContent.includes("min"));
if (timeMeta) timeMeta.textContent = "≈ 65–75 min";
if (questionCounter && currentStage === "quiz") questionCounter.textContent = `${currentQuestion + 1} / ${questions.length}`;

// Inject diagnostic UI without exposing levels during the assessment itself.
const resultGrid = document.querySelector(".result-grid");
const scoreCard = document.querySelector(".score-card");
if (resultGrid && scoreCard && !document.querySelector("#diagnosticSummary")) {
  const panel = document.createElement("section");
  panel.id = "diagnosticSummary";
  panel.className = "diagnostic-panel";
  panel.innerHTML = `
    <p class="eyebrow">Diagnóstico automático</p>
    <div class="diagnostic-heading">
      <div>
        <span class="diagnostic-label">Estimativa atual</span>
        <strong id="diagnosticLevel" class="diagnostic-level">—</strong>
      </div>
      <span id="diagnosticConfidence" class="diagnostic-confidence"></span>
    </div>
    <p id="diagnosticHeadline" class="diagnostic-headline"></p>
    <div class="diagnostic-columns">
      <div>
        <span class="diagnostic-label">Forças observadas</span>
        <div id="diagnosticStrengths" class="diagnostic-list"></div>
      </div>
      <div>
        <span class="diagnostic-label">Prioridades</span>
        <div id="diagnosticPriorities" class="diagnostic-list"></div>
      </div>
    </div>
    <p class="diagnostic-note">Esta estimativa considera uso da língua, vocabulário e leitura. A classificação final deve ser confirmada pela escrita já coletada e pela avaliação oral/auditiva.</p>`;
  scoreCard.insertAdjacentElement("afterend", panel);
}

const style = document.createElement("style");
style.textContent = `
  .diagnostic-panel {
    margin: 0 0 30px;
    padding: clamp(22px, 5vw, 32px);
    border: 1px solid var(--border);
    border-radius: 20px;
    background: #f5f5f1;
    text-align: left;
  }
  .diagnostic-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 14px;
  }
  .diagnostic-label {
    display: block;
    margin-bottom: 5px;
    color: var(--muted);
    font-size: .76rem;
    font-weight: 800;
    letter-spacing: .08em;
    text-transform: uppercase;
  }
  .diagnostic-level {
    display: block;
    font-size: clamp(2rem, 7vw, 3.4rem);
    line-height: 1;
    letter-spacing: -.05em;
  }
  .diagnostic-confidence {
    padding: 7px 10px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: var(--surface);
    color: var(--muted);
    font-size: .8rem;
    font-weight: 750;
    white-space: nowrap;
  }
  .diagnostic-headline {
    margin-bottom: 22px;
    color: var(--text);
    font-size: 1rem;
  }
  .diagnostic-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
  }
  .diagnostic-list {
    display: grid;
    gap: 7px;
  }
  .diagnostic-chip {
    padding: 9px 11px;
    border: 1px solid var(--border);
    border-radius: 11px;
    background: var(--surface);
    color: var(--text);
    font-size: .88rem;
  }
  .diagnostic-note {
    margin: 22px 0 0;
    padding-top: 18px;
    border-top: 1px solid var(--border);
    color: var(--muted);
    font-size: .86rem;
  }
  .level-status {
    display: inline-block;
    margin-left: 8px;
    color: var(--muted);
    font-size: .78rem;
    font-weight: 650;
  }
  @media (max-width: 640px) {
    .diagnostic-heading { align-items: flex-start; flex-direction: column; }
    .diagnostic-columns { grid-template-columns: 1fr; }
  }
`;
document.head.appendChild(style);

const LEVEL_ORDER = ["A1", "A2", "B1", "B2", "C1"];

function diagnosticLevelRows() {
  return groupScores("level", LEVEL_ORDER).map((row) => ({
    ...row,
    percent: Math.round((row.correct / row.total) * 100),
  }));
}

function levelBand(percent) {
  if (percent >= 80) return "forte";
  if (percent >= 70) return "consolidado";
  if (percent >= 55) return "em desenvolvimento";
  if (percent >= 40) return "evidência parcial";
  return "a revisar";
}

function diagnosticProfile() {
  const levels = diagnosticLevelRows();
  const byLevel = Object.fromEntries(levels.map((row) => [row.label, row]));
  let consolidatedIndex = -1;

  // A level only counts as consolidated if the path up to that level is consistent.
  for (let index = 0; index < LEVEL_ORDER.length; index += 1) {
    const level = byLevel[LEVEL_ORDER[index]];
    if (!level || level.percent < 70) break;
    const lowerLevels = LEVEL_ORDER.slice(0, index).map((name) => byLevel[name]).filter(Boolean);
    const lowerFloorOk = lowerLevels.every((row) => row.percent >= 65);
    if (!lowerFloorOk) break;
    consolidatedIndex = index;
  }

  const consolidated = consolidatedIndex >= 0 ? LEVEL_ORDER[consolidatedIndex] : null;
  const next = consolidatedIndex + 1 < LEVEL_ORDER.length ? LEVEL_ORDER[consolidatedIndex + 1] : null;
  const nextRow = next ? byLevel[next] : null;

  let estimate;
  let headline;
  if (!consolidated) {
    const a1 = byLevel.A1;
    estimate = "A1 em desenvolvimento";
    headline = a1 && a1.percent >= 55
      ? `Há uma base inicial de A1, mas ela ainda não aparece com consistência suficiente para ser considerada consolidada (${a1.percent}%).`
      : "A base A1 ainda apresenta lacunas importantes nesta parte automática da avaliação.";
  } else if (!next) {
    estimate = "C1";
    headline = "O desempenho automático alcançou C1 com base consistente nos níveis anteriores. A escrita, fala e compreensão auditiva ainda precisam confirmar essa estimativa.";
  } else if (nextRow.percent >= 65) {
    estimate = `${consolidated}+ / ${next} em desenvolvimento`;
    headline = `${consolidated} aparece consolidado e há evidência relevante de ${next} (${nextRow.percent}%), mas ainda não suficiente para considerar o próximo nível plenamente consolidado.`;
  } else if (nextRow.percent >= 45) {
    estimate = `${consolidated} · sinais de ${next}`;
    headline = `${consolidated} é a faixa mais segura. Há sinais de ${next} (${nextRow.percent}%), porém com domínio ainda irregular.`;
  } else {
    estimate = consolidated;
    headline = `${consolidated} é a faixa mais segura nesta parte automática. O desempenho em ${next} (${nextRow.percent}%) ainda indica uma transição inicial.`;
  }

  // Detect isolated high scores above a weak intermediate level.
  const firstWeakIndex = LEVEL_ORDER.findIndex((name, index) => index <= consolidatedIndex ? false : (byLevel[name]?.percent ?? 0) < 55);
  const irregularHigher = firstWeakIndex >= 0
    ? LEVEL_ORDER.slice(firstWeakIndex + 1).some((name) => (byLevel[name]?.percent ?? 0) >= 70)
    : false;
  if (irregularHigher) {
    headline += " Houve acertos fortes em faixas superiores, mas eles são tratados como evidência isolada porque a progressão entre níveis não foi consistente.";
  }

  const skills = groupScores("skill", ["Grammar", "Vocabulary", "Everyday English", "Pragmatics", "Meaning", "Reading"])
    .map((row) => ({ ...row, percent: Math.round((row.correct / row.total) * 100) }))
    .filter((row) => row.total >= 2);

  const strengths = [...skills]
    .filter((row) => row.percent >= 75)
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 3);

  const priorities = [...skills]
    .filter((row) => row.percent < 65)
    .sort((a, b) => a.percent - b.percent)
    .slice(0, 3);

  const levelSpread = levels.map((row) => row.percent);
  const consistent = levelSpread.every((value, index) => index === 0 || value <= levelSpread[index - 1] + 20);
  const confidence = consistent ? "evidência consistente" : "perfil irregular";

  return { estimate, headline, consolidated, next, levels, strengths, priorities, confidence };
}

function renderDiagnosticList(container, rows, emptyText) {
  if (!container) return;
  container.innerHTML = rows.length
    ? rows.map((row) => `<div class="diagnostic-chip">${escapeHtml(row.label)} · ${row.correct}/${row.total} (${row.percent}%)</div>`).join("")
    : `<div class="diagnostic-chip">${escapeHtml(emptyText)}</div>`;
}

function renderDiagnosticLevelRows(container, rows) {
  if (!container) return;
  container.innerHTML = rows.map(({ label, correct, total, percent }) =>
    `<div class="section-result"><strong>${escapeHtml(label)}<span class="level-status">${escapeHtml(levelBand(percent))}</span></strong><span>${correct}/${total} · ${percent}%</span></div>`
  ).join("");
}

// Override the original result renderer with a diagnostic-aware version.
renderResults = function () {
  const objectiveScore = getObjectiveScore();
  const readingScore = getReadingScore();
  const total = questions.length + readingPassages.flatMap((p) => p.questions).length;
  const score = objectiveScore + readingScore;
  const percent = Math.round((score / total) * 100);
  const profile = diagnosticProfile();

  resultStudent.textContent = student.name;
  scoreValue.textContent = `${score}/${total}`;
  scorePercent.textContent = `${percent}%`;

  const levelNode = document.querySelector("#diagnosticLevel");
  const confidenceNode = document.querySelector("#diagnosticConfidence");
  const headlineNode = document.querySelector("#diagnosticHeadline");
  if (levelNode) levelNode.textContent = profile.estimate;
  if (confidenceNode) confidenceNode.textContent = profile.confidence;
  if (headlineNode) headlineNode.textContent = profile.headline;

  renderDiagnosticLevelRows(levelResults, profile.levels);
  renderScoreRows(skillResults, groupScores("skill", ["Grammar", "Vocabulary", "Everyday English", "Pragmatics", "Meaning", "Reading"]));
  renderDiagnosticList(document.querySelector("#diagnosticStrengths"), profile.strengths, "Nenhuma competência se destacou com segurança suficiente.");
  renderDiagnosticList(document.querySelector("#diagnosticPriorities"), profile.priorities, "Sem lacunas automáticas relevantes; confirme na escrita e no oral.");
  shareStatus.textContent = "";
};

buildShareText = function () {
  const objectiveScore = getObjectiveScore();
  const readingScore = getReadingScore();
  const total = questions.length + readingPassages.flatMap((p) => p.questions).length;
  const totalScore = objectiveScore + readingScore;
  const percent = Math.round((totalScore / total) * 100);
  const profile = diagnosticProfile();
  const levelLines = profile.levels.map(({ label, correct, total, percent: levelPercent }) =>
    `- ${label}: ${correct}/${total} (${levelPercent}%) — ${levelBand(levelPercent)}`
  );
  const skillRows = groupScores("skill", ["Grammar", "Vocabulary", "Everyday English", "Pragmatics", "Meaning", "Reading"])
    .map(({ label, correct, total }) => ({ label, correct, total, percent: Math.round((correct / total) * 100) }));
  const skillLines = skillRows.map(({ label, correct, total, percent: skillPercent }) => `- ${label}: ${correct}/${total} (${skillPercent}%)`);
  const strengthLines = profile.strengths.length
    ? profile.strengths.map((row) => `- ${row.label}: ${row.percent}%`)
    : ["- sem força isolada suficiente para destacar"];
  const priorityLines = profile.priorities.length
    ? profile.priorities.map((row) => `- ${row.label}: ${row.percent}%`)
    : ["- sem prioridade automática clara; confirmar na produção"];

  return [
    "AVALIAÇÃO DIAGNÓSTICA DE INGLÊS",
    `Aluno(a): ${student.name}`,
    "",
    `ESTIMATIVA AUTOMÁTICA: ${profile.estimate}`,
    profile.headline,
    `Consistência: ${profile.confidence}`,
    "",
    `Pontuação automática: ${totalScore}/${total} (${percent}%)`,
    `Questões objetivas: ${objectiveScore}/${questions.length}`,
    `Leitura: ${readingScore}/8`,
    "",
    "EVIDÊNCIA POR NÍVEL:",
    ...levelLines,
    "",
    "COMPETÊNCIAS:",
    ...skillLines,
    "",
    "FORÇAS OBSERVADAS:",
    ...strengthLines,
    "",
    "PRIORIDADES:",
    ...priorityLines,
    "",
    "Observação: a estimativa acima considera apenas uso da língua, vocabulário e leitura. Escrita, fala e compreensão auditiva devem confirmar ou ajustar o nível final.",
    "",
    `WRITING 1 (${countWords(writingResponses.w001)} words):`,
    writingResponses.w001.trim() || "[sem resposta]",
    "",
    `WRITING 2 (${countWords(writingResponses.w002)} words):`,
    writingResponses.w002.trim() || "[sem resposta]",
  ].join("\n");
};

// Re-render after extending the assessment, including sessions restored before this file loaded.
if (currentStage === "quiz") {
  renderQuestion();
  renderOverview();
} else if (currentStage === "result") {
  renderResults();
}
saveProgress();
