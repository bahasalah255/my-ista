// ------------------ DATA ------------------
const part1 = [
  {q:"Qu’est-ce qu’un ordinateur ?", opts:["Une machine traitant des informations","Un livre","Une imprimante","Une application"], a:0},
  {q:"Quel est le composant matériel principal ?", opts:["Processeur","Word","Excel","Internet"], a:0},
  {q:"Les logiciels sont :", opts:["Programmes exécutables","Imprimantes","Claviers","Moniteurs"], a:0},
  {q:"Une URL est :", opts:["Adresse web","Logiciel","Réseau","Serveur"], a:0},
  {q:"Un ordinateur portable est :", opts:["Mobile","Fixe","Imprimante","Serveur"], a:0}
];

const part2 = [
  {q:"Quel logiciel sert à traiter du texte ?", opts:["Word","Excel","PowerPoint","Chrome"], a:0},
  {q:"Comment insérer un tableau ?", opts:["Menu Insertion","Menu Fichier","Menu Affichage","Menu Révision"], a:0},
  {q:"Pour mettre en forme un texte, on utilise :", opts:["Onglet Accueil","Menu Fichier","Menu Aide","Menu Outils"], a:0},
  {q:"Pour ajouter une image :", opts:["Insertion → Image","Fichier → Nouveau","Révision → Image","Affichage → Image"], a:0},
  {q:"Pour créer une liste à puces :", opts:["Accueil → Puces","Insertion → Puces","Affichage → Puces","Révision → Puces"], a:0}
];

const part3 = [
  {q:"Qu’est-ce qu’une adresse IP ?", opts:["Numéro identifiant un appareil sur le réseau","Mot de passe","Logiciel","URL"], a:0},
  {q:"Qu’est-ce qu’un navigateur web ?", opts:["Logiciel pour naviguer sur Internet","Clavier","Souris","Serveur"], a:0},
  {q:"Comment rechercher une info ?", opts:["Utiliser un moteur de recherche","Ouvrir Word","Créer un PDF","Imprimer"], a:0},
  {q:"Une URL sert à :", opts:["Accéder à une page web","Créer un fichier","Éditer un texte","Imprimer un document"], a:0},
  {q:"Le cloud permet :", opts:["Stocker et accéder aux données en ligne","Stocker en local","Créer un site","Programmer"], a:0}
];

const part4 = [
  {q:"Pourquoi utiliser les réseaux sociaux ?", opts:["Communication et partage","Pour coder","Pour installer Windows","Pour imprimer"], a:0},
  {q:"Un emoji sert à :", opts:["Exprimer une émotion","Éditer un texte","Programmer","Stocker des données"], a:0},
  {q:"La messagerie instantanée sert à :", opts:["Échanger rapidement","Créer un site","Imprimer","Programmer"], a:0},
  {q:"Les utilisateurs des réseaux sociaux sont :", opts:["Des personnes utilisant ces plateformes","Des ordinateurs","Des imprimantes","Des logiciels"], a:0},
  {q:"Pourquoi la cybersécurité est importante ?", opts:["Protéger les informations","Écrire du texte","Créer un fichier","Installer un logiciel"], a:0}
];

// ------------------ STATE ------------------
let idx1=0, idx2=0, idx3=0, idx4=0;
let score1=0, score2=0, score3=0, score4=0;

// ------------------ RENDER FUNCTION ------------------
function renderBlock(part, idx, qElId, optsElId, nextBtnId, scoreVar) {
  const questionObj = part[idx];
  document.getElementById(qElId).textContent = `${idx+1}. ${questionObj.q}`;
  const optsContainer = document.getElementById(optsElId);
  optsContainer.innerHTML="";
  questionObj.opts.forEach((optText,optIndex)=>{
    const btn = document.createElement("button");
    btn.type="button";
    btn.className="btn option-btn";
    btn.textContent = optText;
    btn.onclick = () => {
      if(btn.disabled) return;
      if(optIndex === questionObj.a){
        btn.classList.add("correct");
        if(scoreVar==="score1") score1++;
        if(scoreVar==="score2") score2++;
        if(scoreVar==="score3") score3++;
        if(scoreVar==="score4") score4++;
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
  document.getElementById(nextBtnId).style.display="none";
  document.getElementById(qElId.replace("question","progress")).textContent = `Question ${idx+1} / ${part.length}`;
}

// ------------------ INITIALIZE PARTS ------------------
function startPart1(){ renderBlock(part1, idx1, "question-p1", "options-p1", "next-p1", "score1"); }
function startPart2(){ renderBlock(part2, idx2, "question-p2", "options-p2", "next-p2", "score2"); }
function startPart3(){ renderBlock(part3, idx3, "question-p3", "options-p3", "next-p3", "score3"); }
function startPart4(){ renderBlock(part4, idx4, "question-p4", "options-p4", "next-p4", "score4"); }

document.getElementById("next-p1").onclick = () => {
  idx1++;
  if(idx1 < part1.length) startPart1();
  else { document.getElementById("quiz-part1").style.display="none"; startPart2(); window.scrollTo({top:0, behavior:"smooth"});}
};

document.getElementById("next-p2").onclick = () => {
  idx2++;
  if(idx2 < part2.length) startPart2();
  else { document.getElementById("quiz-part2").style.display="none"; startPart3(); window.scrollTo({top:0, behavior:"smooth"});}
};

document.getElementById("next-p3").onclick = () => {
  idx3++;
  if(idx3 < part3.length) startPart3();
  else { document.getElementById("quiz-part3").style.display="none"; startPart4(); window.scrollTo({top:0, behavior:"smooth"});}
};

document.getElementById("next-p4").onclick = () => {
  idx4++;
  if(idx4 < part4.length) startPart4();
  else { document.getElementById("quiz-part4").style.display="none"; showFinal(); window.scrollTo({top:0, behavior:"smooth"});}
};

// ------------------ FINAL RESULTS ------------------
function showFinal(){
  document.getElementById("final-results").style.display="block";
  const totalScore = score1+score2+score3+score4;
  const totalQuestions = part1.length + part2.length + part3.length + part4.length;
  document.getElementById("final-score").textContent = `Total: ${totalScore} / ${totalQuestions}`;
  document.getElementById("breakdown").innerHTML = `
    <ul>
      <li>Partie 1: ${score1} / ${part1.length}</li>
      <li>Partie 2: ${score2} / ${part2.length}</li>
      <li>Partie 3: ${score3} / ${part3.length}</li>
      <li>Partie 4: ${score4} / ${part4.length}</li>
    </ul>
  `;
  document.getElementById("restart").onclick = (e)=>{ e.preventDefault(); location.reload(); };
}

// ------------------ START ------------------
startPart1();
