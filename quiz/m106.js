// ------------------ DATA ------------------
const part1 = [
  {q:"Quel modèle est utilisé pour concevoir une base de données ?", opts:["MERISE","HTML","CSS","Python"], a:0},
  {q:"Une entité représente :", opts:["Un objet ou concept","Une couleur","Un style CSS","Une fonction"], a:0},
  {q:"Une relation lie :", opts:["Deux entités","Deux fonctions","Deux variables","Deux modules"], a:0},
  {q:"Un attribut est :", opts:["Une caractéristique d'une entité","Une boucle","Un objet Python","Un index SQL"], a:0},
  {q:"Quel diagramme représente les relations entre entités ?", opts:["MERISE UML","CSS","JavaScript","Python"], a:0}
];

const part2 = [
  {q:"SQL est utilisé pour :", opts:["Manipuler des bases de données","Créer des pages web","Écrire du CSS","Programmer des jeux"], a:0},
  {q:"CREATE TABLE sert à :", opts:["Créer une table","Supprimer un fichier","Afficher un graphique","Lancer un serveur"], a:0},
  {q:"INSERT INTO permet de :", opts:["Ajouter des données","Supprimer une table","Modifier le CSS","Compiler Python"], a:0},
  {q:"SELECT ... FROM ... sert à :", opts:["Lire des données","Créer une classe","Dessiner une forme","Écrire un algorithme"], a:0},
  {q:"UPDATE ... SET ... WHERE ... sert à :", opts:["Modifier des données existantes","Créer une table","Exécuter Python","Écrire du HTML"], a:0}
];

const part3 = [
  {q:"Une jointure (JOIN) permet :", opts:["Combiner des tables","Dessiner une interface","Compiler un programme","Créer un objet"], a:0},
  {q:"INNER JOIN retourne :", opts:["Les lignes correspondantes","Toutes les lignes","Les couleurs","Les variables"], a:0},
  {q:"LEFT JOIN retourne :", opts:["Toutes les lignes de gauche et correspondances de droite","Seules les lignes de droite","Toutes les couleurs","Toutes les fonctions"], a:0},
  {q:"Une clé primaire (PRIMARY KEY) :", opts:["Identifie de manière unique une ligne","Stocke une couleur","Est une fonction","Crée une boucle"], a:0},
  {q:"Une clé étrangère (FOREIGN KEY) :", opts:["Relie deux tables","Supprime une table","Crée un style CSS","Est un objet Python"], a:0}
];

const part4 = [
  {q:"L’indexation sert à :", opts:["Accélérer les recherches","Créer des variables","Dessiner des graphiques","Compiler le code"], a:0},
  {q:"Normaliser une base de données :", opts:["Évite la redondance et optimise la structure","Supprime les données","Crée un fichier CSS","Compile SQL"], a:0},
  {q:"Une transaction SQL garantit :", opts:["L’intégrité des données","La couleur des pages","L’animation CSS","L’exécution JS"], a:0},
  {q:"Le SQL injection est :", opts:["Une vulnérabilité","Une syntaxe SQL","Un style CSS","Une fonction Python"], a:0},
  {q:"Une bonne pratique :", opts:["Sauvegarder régulièrement","Ignorer les erreurs","Supprimer tout","Écrire du CSS"], a:0}
];

// ------------------ state ------------------
let idx1=0, score1=0, idx2=0, score2=0, idx3=0, score3=0, idx4=0, score4=0;

// ------------------ helper ------------------
function renderBlock(part, idx, qElId, optsElId, nextBtnId, progressId){
  const questionObj = part[idx];
  document.getElementById(qElId).textContent = `${idx+1}. ${questionObj.q}`;
  const optsContainer = document.getElementById(optsElId);
  optsContainer.innerHTML="";
  questionObj.opts.forEach((optText,optIndex)=>{
    const btn = document.createElement("button");
    btn.type="button";
    btn.className="btn option-btn";
    btn.textContent=optText;
    btn.onclick=()=>{
      if(btn.disabled) return;
      if(optIndex===questionObj.a){
        btn.classList.add("correct");
        if(nextBtnId==="next-p1") score1++;
        if(nextBtnId==="next-p2") score2++;
        if(nextBtnId==="next-p3") score3++;
        if(nextBtnId==="next-p4") score4++;
      } else {
        btn.classList.add("wrong");
        const siblings = optsContainer.querySelectorAll(".option-btn");
        siblings.forEach((s,i)=>{if(i===questionObj.a) s.classList.add("correct");});
      }
      optsContainer.querySelectorAll(".option-btn").forEach(b=>b.disabled=true);
      document.getElementById(nextBtnId).style.display="inline-block";
    };
    optsContainer.appendChild(btn);
  });
  document.getElementById(progressId).textContent=`Question ${idx+1} / ${part.length}`;
  document.getElementById(nextBtnId).style.display="none";
}

// ------------------ initialize ------------------
function startPart1(){renderBlock(part1,idx1,"question-p1","options-p1","next-p1","progress-p1");}
document.getElementById("next-p1").onclick=()=>{
  idx1++; if(idx1<part1.length) startPart1(); else {document.getElementById("quiz-part1").style.display="none"; window.scrollTo({top:0,behavior:"smooth"});}
};
startPart1();

function startPart2(){renderBlock(part2,idx2,"question-p2","options-p2","next-p2","progress-p2");}
document.getElementById("next-p2").onclick=()=>{
  idx2++; if(idx2<part2.length) startPart2(); else {document.getElementById("quiz-part2").style.display="none"; window.scrollTo({top:0,behavior:"smooth"});}
};
startPart2();

function startPart3(){renderBlock(part3,idx3,"question-p3","options-p3","next-p3","progress-p3");}
document.getElementById("next-p3").onclick=()=>{
  idx3++; if(idx3<part3.length) startPart3(); else {document.getElementById("quiz-part3").style.display="none"; window.scrollTo({top:0,behavior:"smooth"});}
};
startPart3();

function startPart4(){renderBlock(part4,idx4,"question-p4","options-p4","next-p4","progress-p4");}
document.getElementById("next-p4").onclick=()=>{
  idx4++; if(idx4<part4.length) startPart4(); else {document.getElementById("quiz-part4").style.display="none"; showFinal(); window.scrollTo({top:0,behavior:"smooth"});}
};
startPart4();

function showFinal(){
  document.getElementById("final-results").style.display="block";
  const totalScore=score1+score2+score3+score4;
  const totalQuestions=part1.length+part2.length+part3.length+part4.length;
  document.getElementById("final-score").textContent=`Total: ${totalScore} / ${totalQuestions}`;
  const breakdown=document.getElementById("breakdown");
  breakdown.innerHTML=`<ul>
    <li>Part 1 score: ${score1} / ${part1.length}</li>
    <li>Part 2 score: ${score2} / ${part2.length}</li>
    <li>Part 3 score: ${score3} / ${part3.length}</li>
    <li>Part 4 score: ${score4} / ${part4.length}</li>
  </ul>`;
  document.getElementById("restart").onclick=(e)=>{e.preventDefault(); location.reload();};
}
