const quizHTML = [
  {question:"Quelle balise définit un paragraphe?", options:["p","div","span"], answer:"p"},
  {question:"Balise pour image?", options:["img","image","picture"], answer:"img"},
  {question:"Liste non ordonnée?", options:["ul","ol","li"], answer:"ul"},
  {question:"Balise pour titre principal?", options:["h1","h2","title"], answer:"h1"},
  {question:"Comment lier un CSS externe?", options:["link","style","css"], answer:"link"},
  {question:"Balise pour lien hypertexte?", options:["a","link","href"], answer:"a"},
  {question:"Balise pour table?", options:["table","tr","td"], answer:"table"},
  {question:"Balise pour formulaire?", options:["form","input","textarea"], answer:"form"},
  {question:"Balise pour liste ordonnée?", options:["ol","ul","li"], answer:"ol"},
  {question:"Balise pour commentaire?", options:["!-- --","//","/* */"], answer:"!-- --"},
  {question:"Balise pour division?", options:["div","section","span"], answer:"div"},
  {question:"Balise pour paragraphe en gras?", options:["b","strong","p"], answer:"b"},
  {question:"Balise pour italique?", options:["i","em","italic"], answer:"i"},
  {question:"Balise pour bouton?", options:["button","input","btn"], answer:"button"},
  {question:"Balise pour image alternative?", options:["alt","title","src"], answer:"alt"},
  {question:"Balise pour section?", options:["section","div","article"], answer:"section"},
  {question:"Balise pour article?", options:["article","section","aside"], answer:"article"},
  {question:"Balise pour aside?", options:["aside","div","section"], answer:"aside"},
  {question:"Balise pour footer?", options:["footer","bottom","div"], answer:"footer"},
  {question:"Balise pour header?", options:["header","top","h1"], answer:"header"}
];

const quizCSS = [
  {question:"Propriété couleur texte?", options:["color","background","font-size"], answer:"color"},
  {question:"Propriété pour margin?", options:["margin","padding","border"], answer:"margin"},
  {question:"Unité relative?", options:["px","em","%"], answer:"em"},
  {question:"Propriété display?", options:["block","inline","flex"], answer:"block"},
  {question:"Propriété pour fond?", options:["background","color","border"], answer:"background"},
  {question:"Police texte?", options:["font-family","font-size","font-weight"], answer:"font-family"},
  {question:"Taille police?", options:["font-size","line-height","letter-spacing"], answer:"font-size"},
  {question:"Alignement texte?", options:["text-align","vertical-align","align"], answer:"text-align"},
  {question:"Propriété pour bordure?", options:["border","outline","stroke"], answer:"border"},
  {question:"Propriété pour padding?", options:["padding","margin","spacing"], answer:"padding"},
  {question:"Unité absolue?", options:["px","em","rem"], answer:"px"},
  {question:"Propriété couleur fond?", options:["background-color","color","border-color"], answer:"background-color"},
  {question:"Propriété pour flex?", options:["display:flex","flex-wrap","justify-content"], answer:"display:flex"},
  {question:"Align items center?", options:["align-items:center","align-content:center","justify-content:center"], answer:"align-items:center"},
  {question:"Text decoration underline?", options:["text-decoration:underline","font-style:italic","text-transform:uppercase"], answer:"text-decoration:underline"},
  {question:"Propriété cursor?", options:["cursor","pointer","hover"], answer:"cursor"},
  {question:"Propriété pour opacity?", options:["opacity","visibility","display"], answer:"opacity"},
  {question:"Propriété pour transition?", options:["transition","animation","transform"], answer:"transition"},
  {question:"Unité vh?", options:["height","width","viewport height"], answer:"viewport height"},
  {question:"Unité vw?", options:["viewport width","width","px"], answer:"viewport width"}
];

const quizBS = [
  {question:"Classe bouton bleu?", options:["btn btn-primary","btn btn-success","btn btn-danger"], answer:"btn btn-primary"},
  {question:"Classe spacing m-3?", options:["m-3","p-3","mt-3"], answer:"m-3"},
  {question:"Classe grid row?", options:["row","col","container"], answer:"row"},
  {question:"Classe grid colonne?", options:["col","row","container"], answer:"col"},
  {question:"Classe container?", options:["container","container-fluid","container-row"], answer:"container"},
  {question:"Classe pour text center?", options:["text-center","text-left","text-right"], answer:"text-center"},
  {question:"Classe pour bouton danger?", options:["btn btn-danger","btn btn-warning","btn btn-info"], answer:"btn btn-danger"},
  {question:"Classe margin-top 3?", options:["mt-3","mb-3","m-3"], answer:"mt-3"},
  {question:"Classe padding 2?", options:["p-2","p-3","p-1"], answer:"p-2"},
  {question:"Classe badge?", options:["badge","label","span"], answer:"badge"},
  {question:"Classe alert?", options:["alert","alert-danger","alert-primary"], answer:"alert"},
  {question:"Classe pour flex?", options:["d-flex","flex-row","flex-column"], answer:"d-flex"},
  {question:"Classe justify content center?", options:["justify-content-center","align-items-center","d-flex"], answer:"justify-content-center"},
  {question:"Classe align items start?", options:["align-items-start","align-items-center","align-items-end"], answer:"align-items-start"},
  {question:"Classe btn-outline?", options:["btn-outline-primary","btn-primary","btn-success"], answer:"btn-outline-primary"},
  {question:"Classe display none?", options:["d-none","d-block","d-flex"], answer:"d-none"},
  {question:"Classe table?", options:["table","table-bordered","table-striped"], answer:"table"},
  {question:"Classe responsive table?", options:["table-responsive","table-striped","table-bordered"], answer:"table-responsive"},
  {question:"Classe carousel?", options:["carousel","carousel-item","carousel-inner"], answer:"carousel"},
  {question:"Classe pour nav?", options:["navbar","nav","nav-item"], answer:"navbar"}
];

// ======================
// Variables Globales
// ======================
let currentHTML=0, scoreHTML=0;
let currentCSS=0, scoreCSS=0;
let currentBS=0, scoreBS=0;

// ======================
// Fonctions Génériques
// ======================
function showQuestion(quiz, current, questionId, optionsId, nextId, selectCallback) {
  const q = quiz[current];
  document.getElementById(questionId).textContent = q.question;

  const optionsContainer = document.getElementById(optionsId);
  optionsContainer.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-secondary option-btn w-100 text-start mb-2";
    btn.textContent = opt;
    btn.onclick = () => selectCallback(opt, btn, quiz, current, nextId);
    optionsContainer.appendChild(btn);
  });

  document.getElementById(nextId).style.display = "none";
}

function selectAnswer(opt, btn, quiz, current, nextId, scoreKey) {
  const buttons = btn.parentNode.querySelectorAll(".option-btn");
  if(opt === quiz[current].answer) {
    btn.classList.add("correct");
    if(scoreKey === 'HTML') scoreHTML++;
    else if(scoreKey === 'CSS') scoreCSS++;
    else if(scoreKey === 'BS') scoreBS++;
  } else {
    btn.classList.add("wrong");
    // Show correct option
    buttons.forEach(b => { if(b.textContent === quiz[current].answer) b.classList.add("correct"); });
  }
  // Disable جميع الخيارات
  buttons.forEach(b => b.disabled = true);
  document.getElementById(nextId).style.display = "inline-block";
}

// ======================
// HTML Quiz
// ======================
function showHTMLQ() { showQuestion(quizHTML, currentHTML, "question-html", "options-html", "next-html",
  (opt, btn) => selectAnswer(opt, btn, quizHTML, currentHTML, "next-html", 'HTML'));
}
document.getElementById("next-html").onclick = () => {
  currentHTML++;
  if(currentHTML < quizHTML.length) showHTMLQ();
  else document.getElementById("quiz-html").style.display="none";
};
showHTMLQ();

// ======================
// CSS Quiz
// ======================
function showCSSQ() { showQuestion(quizCSS, currentCSS, "question-css", "options-css", "next-css",
  (opt, btn) => selectAnswer(opt, btn, quizCSS, currentCSS, "next-css", 'CSS'));
}
document.getElementById("next-css").onclick = () => {
  currentCSS++;
  if(currentCSS < quizCSS.length) showCSSQ();
  else document.getElementById("quiz-css").style.display="none";
};
showCSSQ();

// ======================
// Bootstrap Quiz
// ======================
function showBSQ() { showQuestion(quizBS, currentBS, "question-bs", "options-bs", "next-bs",
  (opt, btn) => selectAnswer(opt, btn, quizBS, currentBS, "next-bs", 'BS'));
}
document.getElementById("next-bs").onclick = () => {
  currentBS++;
  if(currentBS < quizBS.length) showBSQ();
  else {
    document.getElementById("quiz-bs").style.display="none";
    showFinalResults();
  }
};
showBSQ();

// ======================
// Résultats finaux
// ======================
function showFinalResults() {
  const totalScore = scoreHTML + scoreCSS + scoreBS;
  const totalQuestions = quizHTML.length + quizCSS.length + quizBS.length;
  document.getElementById("final-score").textContent = `Votre score total: ${totalScore} / ${totalQuestions}`;
  document.getElementById("final-results").style.display = "block";
}