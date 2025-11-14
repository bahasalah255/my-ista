// ------------------ QUESTIONS POO ------------------
const quizPOO = [
  {q:"Quel est le principal avantage de la POO ?", options:["Gestion efficace des grandes bases de code","Facilité d’écriture de code procédural","Exécution plus rapide","Moins de lisibilité"], correct:0},
  {q:"La programmation procédurale est basée sur :", options:["Les objets","Les fonctions/procédures","Les classes","Les interfaces graphiques"], correct:1},
  {q:"La POO combine :", options:["Données et fonctions dans des objets","Données uniquement","Fonctions uniquement","Modules externes"], correct:0},
  {q:"Qu’est-ce qu’un objet en POO ?", options:["Une instance d’une classe","Une variable globale","Une fonction spéciale","Un type de donnée primitif"], correct:0},
  {q:"L’héritage permet de :", options:["Réutiliser le code et partager des caractéristiques","Créer des boucles infinies","Masquer les variables","Accélérer le code"], correct:0},
  {q:"Le polymorphisme signifie :", options:["Utiliser plusieurs formes d’une même méthode","Créer des variables multiples","Écrire du code procédural","Supprimer des classes"], correct:0},
  {q:"L’encapsulation sert à :", options:["Masquer les détails internes d’un objet","Créer des modules","Définir des boucles","Initialiser des classes"], correct:0},
  {q:"L’abstraction en POO :", options:["Ne montre que les détails essentiels","Masque toutes les classes","Supprime les méthodes","Copie le code"], correct:0},
  {q:"Quel mot-clé Python permet de créer une classe ?", options:["class","def","object","new"], correct:0},
  {q:"Comment créer un constructeur en Python ?", options:["__init__","start","create","main"], correct:0},
  {q:"Une méthode est :", options:["Une fonction définie dans une classe","Une variable globale","Une boucle","Une instruction Python"], correct:0},
  {q:"Un attribut est :", options:["Une donnée associée à un objet","Une fonction","Une exception","Une classe abstraite"], correct:0},
  {q:"L’héritage multiple permet :", options:["Qu’une classe hérite de plusieurs classes","Créer plusieurs objets simultanément","Accélérer le code","Supprimer des classes"], correct:0},
  {q:"La réutilisation du code est améliorée grâce à :", options:["L’héritage","Les boucles","Les variables globales","L’abstraction seulement"], correct:0},
  {q:"Lequel n’est pas un pilier de la POO ?", options:["Héritage","Encapsulation","Polymorphisme","Procéduralisme"], correct:3},
  {q:"Quelle instruction Python permet de gérer une exception ?", options:["try-except","if-else","loop","import"], correct:0},
  {q:"Une classe abstraite est utilisée pour :", options:["Définir des méthodes que les sous-classes doivent implémenter","Créer des objets directement","Initialiser des variables globales","Supprimer des classes"], correct:0},
  {q:"Que signifie « instancier » un objet ?", options:["Créer une instance d’une classe","Déclarer une fonction","Supprimer une variable","Copier une classe"], correct:0},
  {q:"Les objets permettent :", options:["De regrouper données et méthodes","De créer des boucles infinies","D’écrire uniquement du code procédural","D’augmenter la vitesse d’exécution"], correct:0},
  {q:"Quel est l’objectif de la POO ?", options:["Réutilisation, modularité et maintenance","Écrire du code plus lent","Supprimer les classes","Créer des variables globales"], correct:0},
  {q:"Laquelle de ces phrases est vraie pour l’encapsulation ?", options:["Elle protège les données internes","Elle supprime les méthodes","Elle crée des variables globales","Elle accélère le code"], correct:0},
  {q:"Quel est l’avantage du polymorphisme ?", options:["Même méthode peut agir différemment selon l’objet","Création multiple d’objets","Accélération du code","Masquage de variables"], correct:0},
  {q:"Laquelle de ces phrases décrit le mieux une classe ?", options:["Modèle pour créer des objets","Exécution de code global","Variable unique","Boucle principale"], correct:0},
  {q:"Lequel est un exemple de langage orienté objet ?", options:["Python","HTML","CSS","SQL"], correct:0},
  {q:"Quel est le rôle du constructeur __init__ ?", options:["Initialiser les objets","Détruire les objets","Créer des boucles","Importer des modules"], correct:0},
  {q:"La POO facilite la maintenance car :", options:["Le code est modulaire et réutilisable","On supprime les classes inutiles","On accélère les boucles","On évite les variables"], correct:0},
  {q:"Les exceptions en Python permettent de :", options:["Gérer les erreurs pendant l’exécution","Créer des objets","Supprimer des classes","Réutiliser les méthodes"], correct:0},
  {q:"Un objet peut être :", options:["Instancié plusieurs fois à partir d’une même classe","Instancié une seule fois","Copié uniquement","Déclaré comme fonction"], correct:0},
  {q:"L’abstraction est utile pour :", options:["Ne montrer que l’essentiel à l’utilisateur","Masquer les variables globales","Créer des boucles","Initialiser des objets"], correct:0},
  {q:"La POO est préférable pour :", options:["Applications complexes et évolutives","Scripts de 2 lignes","Langage assembleur","Supprimer des fonctions"], correct:0}
];

// ------------------ STATE ------------------
let idx = 0;
let score = 0;

// ------------------ RENDER ------------------
function renderQuestion() {
  if(idx >= quizPOO.length) return showFinal();

  const qObj = quizPOO[idx];
  const questionEl = document.getElementById("question-poo");
  const optionsEl = document.getElementById("options-poo");

  questionEl.textContent = `${idx+1}. ${qObj.q}`;
  optionsEl.innerHTML = "";

  qObj.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = ()=>{
      if(btn.disabled) return;
      // Check correct
      if(i===qObj.correct){
        btn.classList.add("correct");
        score++;
      }else{
        btn.classList.add("wrong");
        // Show correct button
        optionsEl.querySelectorAll(".option-btn").forEach((b,j)=>{
          if(j===qObj.correct) b.classList.add("correct");
        });
      }
      // Disable all buttons
      optionsEl.querySelectorAll(".option-btn").forEach(b=>b.disabled=true);
      document.getElementById("next-poo").style.display="inline-block";
    };
    optionsEl.appendChild(btn);
  });

  document.getElementById("progress-poo").textContent = `Question ${idx+1} / ${quizPOO.length}`;
  document.getElementById("next-poo").style.display="none";
}

// ------------------ NEXT ------------------
document.getElementById("next-poo").onclick = ()=>{
  idx++;
  renderQuestion();
};

// ------------------ FINAL ------------------
function showFinal(){
  document.getElementById("quiz-poo").style.display="none";
  document.getElementById("final-results").style.display="block";
  document.getElementById("final-score").textContent = `Score: ${score} / ${quizPOO.length}`;
  document.getElementById("breakdown").innerHTML = `<ul><li>Score POO: ${score} / ${quizPOO.length}</li></ul>`;
  document.getElementById("restart").onclick = (e)=>{ e.preventDefault(); location.reload(); };
}

// ------------------ INIT ------------------
renderQuestion();
