// ------------------ DATA (questions + options + correct answer keys) ------------------
// Part 1 (questions 1-5)
const part1 = [
  {q: "Quelle étape est essentielle pour commencer à résoudre un problème algébrique ?", opts:["Écrire tout de suite le code.","Bien comprendre le problème à résoudre.","Passer directement à la mise en œuvre.","Vérifier la syntaxe du langage."], a:1},
  {q: "Que représentent les résultats ou sorties dans un algorithme ?", opts:["Les données d’entrée.","Les données temporaires.","Les valeurs attendues après traitement.","Le code source."], a:2},
  {q: "Dans l'exemple du calcul de la moyenne, quelle est l’étape clé ?", opts:["Lire la liste des entiers.","Calculer la somme de ces entiers.","Diviser la somme par le nombre d’entiers.","Toutes les réponses ci-dessus."], a:3},
  {q: "Quel est le but principal de la modélisation d’un problème ?", opts:["Écrire immédiatement le code.","Analyser et comprendre en profondeur le problème.","Créer une interface graphique.","Tester un programme existant."], a:1},
  {q: "Quelle étape suit généralement l’analyse d’un problème dans la démarche de résolution ?", opts:["La mise en œuvre dans un langage de programmation.","La structuration d’un algorithme.","La rédaction d’un rapport.","La suppression des données inutiles."], a:1}
];

// Part 2 (questions 6-14)
const part2 = [
  {q: "Qu'est-ce qu'un algorithme ?", opts:["Une suite d'instructions simples qui ne conduisent pas forcément à un résultat.","Une suite d'instructions détaillées qui, si elles sont bien exécutées, conduisent à un résultat.","Un programme informatique sans structure particulière.","Un simple document texte."], a:1},
  {q: "Parmi les objets informatiques, lequel reste inchangé durant toute l'exécution d'un programme ?", opts:["La variable","La constante","La procédure","La fonction"], a:1},
  {q: "Lequel de ces types n’est pas mentionné comme un type de donnée principal ?", opts:["Entier","Réel","Date","Booléen"], a:2},
  {q: "Quelle instruction est utilisée pour faire une répétition d’un bloc d’instructions quand le nombre d’itérations est connu à l’avance ?", opts:["Boucle « Pour »","Boucle « TantQue »","Boucle « Répéter »","None of the above"], a:0},
  {q: "Quel est le but d’utiliser des modules ou sous-programmes dans un algorithme ?", opts:["Pour compliquer la programmation.","Pour réutiliser un code dans plusieurs programmes ou modules.","Pour diminuer la sécurité.","Pour ajouter des erreurs."], a:1},
  {q: "Dans un schéma conditionnel à choix multiple, que se passe-t-il si aucune des valeurs ne correspond aux cas prédéfinis ?", opts:["Le programme plante.","La variable est ignorée.","On exécute une action sinon.","Le programme est arrêté immédiatement."], a:2},
  {q: "Quelle est la différence principale entre une constante et une variable ?", opts:["La constante peut changer de valeur, la variable non.","La constante ne peut pas changer de valeur, la variable si.","La variable ne peut pas changer de valeur, la constante si.","Les deux peuvent changer de valeur."], a:1},
  {q: "Quel type de variable est utilisé pour représenter un ensemble de caractères ?", opts:["Entier","Réel","Caractère","Chaîne de caractères"], a:3},
  {q: "Quelle opération n’est pas liée au type entier ?", opts:["Addition (+)","Modulo (mod)","Comparaison (> <)","Puissance ^ (exponentiation)"], a:3}
];

// Part 3 (questions 15-28)
const part3 = [
  {q: "Quel type de fichier est couramment utilisé pour stocker des tableaux de données simples ?", opts:[".pdf",".csv",".xlsx",".docx"], a:1},
  {q: "Quelle instruction Python est utilisée pour lire un fichier CSV ?", opts:["read_csv()","import csv et csv.reader()","load()","open() sans autres modules"], a:1},
  {q: "Que fait une fonction lambda en Python ?", opts:["Définit une fonction qui ne peut pas prendre d’arguments","Crée une fonction anonyme en ligne","Convertit une fonction en texte","Exécute un script externe"], a:1},
  {q: "Que retourne (lambda a: a + 10)(5) ?", opts:["15","10","5","Erreur"], a:0},
  {q: "Laquelle définit une fonction qui multiplie un argument par un nombre inconnu ?", opts:["def myfunc(n): return lambda a: a * n","lambda a: a * n","def myfunc(n): return a * n","lambda a: a / n"], a:0},
  {q: "Quels sont les cinq critères principaux pour évaluer un langage ?", opts:["vitesse, compatibilité, popularité, langue, coût","lisibilité, facilité d’écriture, fiabilité, coût, portabilité","sécurité, syntaxe, taille, vitesse, compatibilité","couleur, taille, syntaxe, mémoire, coût"], a:1},
  {q: "Pourquoi la lisibilité d’un langage est-elle importante ?", opts:["Parce qu’elle augmente la rapidité d’exécution","Parce qu’elle facilite la maintenance et la compréhension du code par d’autres développeurs","Parce qu’elle réduit la consommation de mémoire","Parce qu’elle accélère la compilation"], a:1},
  {q: "Selon la fiche, que comprend une étape pour convertir un algorithme en Python ?", opts:["Écrire directement en Python sans planification","Conversion de l’algorithme en Python en respectant certains critères, puis optimisation du code","Copier-coller l’algorithme dans un éditeur Python sans modification","Utiliser une interface automatique de conversion"], a:1},
  {q: "Après avoir choisi la structure, quelle étape est essentielle ?", opts:["Compiler le code","Convertir l’algorithme en code Python et tester","Écrire un document explicatif","Exécuter directement le pseudocode"], a:1},
  {q: "But principal de l’optimisation après conversion ?", opts:["Améliorer la vitesse, la lisibilité, ou réduire la consommation de ressources","Rendre le code plus long et complexe","Convertir le code en un autre langage","Supprimer toutes les commentaires"], a:0},
  {q: "Quel symbole en Python indique une fin de bloc typique ?", opts:["Point-virgule ;","Deux-points : en début de bloc + indentation / tabulation","Barre oblique /","Parenthèses ()"], a:1},
  {q: "Quelle est la manière correcte d’afficher la somme a + b en Python ?", opts:["print(\"a + b\")","print(a + b)","echo a + b","display(a + b)"], a:1},
  {q: "Qu’indique la référence en Python ?", opts:["Une valeur fixe","L’adresse d’un objet en mémoire","Un identifiant unique pour chaque programme","Une constante"], a:1},
  {q: "Quelles bonnes pratiques améliorent la qualité du code Python ?", opts:["Rendre le code aussi complexe que possible","Utiliser des commentaires et respecter une bonne indentation","Rédiger tout en une seule ligne","Éviter d’utiliser des fonctions"], a:1},
  {q: "Question de rappel : (vide pour garder 28)","opts":["Option A","Option B","Option C","Option D"], a:0} // placeholder if needed
];

// Part 4 (questions 29-34)
const part4 = [
  {q: "Quel type d’erreur ne produit pas de message mais indique une erreur de logique ?", opts:["Erreur de syntaxe","Erreur sémantique ou logique","Erreur d’exécution","Erreur de compilation"], a:1},
  {q: "Quelle erreur bloque l’exécution dès que Python rencontre une erreur de syntaxe ?", opts:["Erreur d’exécution","Erreur de syntaxe","Erreur de logique","Erreur de compilation"], a:1},
  {q: "Quel outil permet d'exécuter pas à pas et voir les variables ?", opts:["Un éditeur de texte","Un compilateur","Un débogueur","Un interpréteur Python"], a:2},
  {q: "Dans l’exemple, quel est le principal problème dans test_debugger.py ?", opts:["La variable 'resultat' n’est pas définie avant utilisation","La boucle ne s’exécute pas","La fonction 'carre' ne fonctionne pas, car 'aa' doit être 'nbnb'","La variable 'a' n’est pas initialisée"], a:2},
  {q: "Quel est le résultat de l’exécution de 'fichierCSV.exe' décrit ?", opts:["Il affiche 'Bonjour' dans la console","Il crée 'annuaire.csv' dans 'dist'","Il compile un script Python","Il envoie un email"], a:1},
  {q: "Pour générer la documentation HTML dans 'docs', quelle commande ? ", opts:["python generate_docs.py","make html","build docs.py","generate_html.py"], a:1}
];

// ------------------ state ------------------
let idx1 = 0, score1 = 0;
let idx2 = 0, score2 = 0;
let idx3 = 0, score3 = 0;
let idx4 = 0, score4 = 0;

// ------------------ helper: render question block ------------------
function renderBlock(part, idx, qElId, optsElId, nextBtnId, progressId) {
  const questionObj = part[idx];
  document.getElementById(qElId).textContent = `${idx + 1}. ${questionObj.q}`;
  const optsContainer = document.getElementById(optsElId);
  optsContainer.innerHTML = "";

  questionObj.opts.forEach((optText, optIndex) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-outline-secondary option-btn";
    btn.textContent = optText;
    btn.onclick = () => {
      // prevent double click
      if (btn.disabled) return;
      // mark correct/wrong
      if (optIndex === questionObj.a) {
        btn.classList.add("correct");
        // increment proper score based on which block
        if (nextBtnId === "next-p1") score1++;
        if (nextBtnId === "next-p2") score2++;
        if (nextBtnId === "next-p3") score3++;
        if (nextBtnId === "next-p4") score4++;
      } else {
        btn.classList.add("wrong");
        // show correct button
        const siblings = optsContainer.querySelectorAll(".option-btn");
        siblings.forEach((s, i) => { if (i === questionObj.a) s.classList.add("correct"); });
      }
      // disable all
      optsContainer.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
      document.getElementById(nextBtnId).style.display = "inline-block";
    };
    optsContainer.appendChild(btn);
  });

  // progress text
  const total = part.length;
  document.getElementById(progressId).textContent = `Question ${idx + 1} / ${total}`;
  // hide next until selection
  document.getElementById(nextBtnId).style.display = "none";
}

// ------------------ initialize & next handlers for each part ------------------
function startPart1() {
  renderBlock(part1, idx1, "question-p1", "options-p1", "next-p1", "progress-p1");
}
document.getElementById("next-p1").onclick = () => {
  idx1++;
  if (idx1 < part1.length) startPart1();
  else {
    document.getElementById("quiz-part1").style.display = "none";
    // move focus to part2 top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
startPart1();

function startPart2() {
  renderBlock(part2, idx2, "question-p2", "options-p2", "next-p2", "progress-p2");
}
document.getElementById("next-p2").onclick = () => {
  idx2++;
  if (idx2 < part2.length) startPart2();
  else {
    document.getElementById("quiz-part2").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
startPart2();

function startPart3() {
  renderBlock(part3, idx3, "question-p3", "options-p3", "next-p3", "progress-p3");
}
document.getElementById("next-p3").onclick = () => {
  idx3++;
  if (idx3 < part3.length) startPart3();
  else {
    document.getElementById("quiz-part3").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
startPart3();

function startPart4() {
  renderBlock(part4, idx4, "question-p4", "options-p4", "next-p4", "progress-p4");
}
document.getElementById("next-p4").onclick = () => {
  idx4++;
  if (idx4 < part4.length) startPart4();
  else {
    document.getElementById("quiz-part4").style.display = "none";
    showFinal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
startPart4();

// ------------------ final results ------------------
function showFinal() {
  document.getElementById("final-results").style.display = "block";
  const totalScore = score1 + score2 + score3 + score4;
  const totalQuestions = part1.length + part2.length + part3.length + part4.length;
  document.getElementById("final-score").textContent = `Total: ${totalScore} / ${totalQuestions}`;

  const breakdown = document.getElementById("breakdown");
  breakdown.innerHTML = `
    <ul>
      <li>Part 1 score: ${score1} / ${part1.length}</li>
      <li>Part 2 score: ${score2} / ${part2.length}</li>
      <li>Part 3 score: ${score3} / ${part3.length}</li>
      <li>Part 4 score: ${score4} / ${part4.length}</li>
    </ul>
  `;

  // restart button
  document.getElementById("restart").onclick = (e) => {
    e.preventDefault();
    location.reload();
  };
}
