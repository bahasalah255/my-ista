// ------------------ DATA ------------------
const parts = [
  [
    {q:"Qu’est-ce que la sécurité des systèmes d’information ?", opts:["Protection des données et systèmes","Créer des sites web","Programmer en PHP","Installer Windows"], a:0},
    {q:"Une menace informatique peut être :", opts:["Virus, malware, phishing","CSS mal appliqué","HTML non valide","Serveur lent"], a:0},
    {q:"Le risque est :", opts:["Probabilité d’un incident","Vitesse d’exécution","Couleur des interfaces","Nombre de lignes de code"], a:0},
    {q:"Une attaque par phishing cible :", opts:["Les utilisateurs","Les bases de données uniquement","Les imprimantes","Les fichiers CSS"], a:0},
    {q:"Un virus informatique peut :", opts:["Endommager un système","Changer la couleur d’un bouton","Modifier HTML automatiquement","Augmenter la RAM"], a:0}
  ],
  [
    {q:"La confidentialité signifie :", opts:["Seules les personnes autorisées accèdent aux données","Tout le monde peut lire les données","Modifier CSS","Exécuter JS côté client"], a:0},
    {q:"L’intégrité des données signifie :", opts:["Données exactes et non modifiées","Couleur uniforme","Formulaire soumis","PHP exécuté"], a:0},
    {q:"Le chiffrement permet :", opts:["Protéger les données","Améliorer CSS","Afficher des messages","Envoyer des emails"], a:0},
    {q:"Un mot de passe fort doit :", opts:["Être complexe et unique","Être 1234","Être visible","Ne jamais changer"], a:0},
    {q:"Le principe de moindre privilège :", opts:["Limiter les droits des utilisateurs","Tout donner à tout le monde","Créer des boucles","Modifier HTML"], a:0}
  ],
  [
    {q:"L’authentification permet :", opts:["Vérifier l’identité d’un utilisateur","Supprimer un compte","Modifier CSS","Afficher du texte"], a:0},
    {q:"Une session PHP sert à :", opts:["Maintenir l’utilisateur connecté","Envoyer un email","Changer CSS","Compiler JS"], a:0},
    {q:"La sauvegarde des données est importante pour :", opts:["Restaurer après un incident","Changer couleur bouton","Écrire HTML","Compiler PHP"], a:0},
    {q:"Les mots de passe ne doivent jamais :", opts:["Être stockés en clair","Être courts","Avoir des caractères spéciaux","Être oubliés"], a:0},
    {q:"L’authentification multifactorielle consiste à :", opts:["Combiner plusieurs méthodes de vérification","Utiliser CSS","Écrire PHP","Envoyer formulaire"], a:0}
  ],
  [
    {q:"Pour se protéger contre les attaques :", opts:["Mettre à jour logiciels et antivirus","Ignorer alertes","Modifier HTML","Écrire CSS"], a:0},
    {q:"Ne pas cliquer sur des liens suspects est :", opts:["Une bonne pratique","Utile pour le design","Créer une boucle","Modifier JS"], a:0},
    {q:"Les sauvegardes doivent être :", opts:["Régulières et testées","Jamais faites","Écrites en CSS","Stockées dans JS"], a:0},
    {q:"Les utilisateurs doivent :", opts:["Être sensibilisés à la sécurité","Tout connaître en PHP","Changer CSS","Apprendre JS"], a:0},
    {q:"Un antivirus sert à :", opts:["Détecter et supprimer les menaces","Modifier HTML","Compiler CSS","Créer des sessions"], a:0}
  ]
];

// ------------------ STATE ------------------
let idx = [0,0,0,0];
let score = [0,0,0,0];

// ------------------ RENDER FUNCTION ------------------
function renderBlock(partNum){
  const idxCur = idx[partNum];
  const part = parts[partNum];
  const questionObj = part[idxCur];
  const qEl = document.getElementById(`question-p${partNum+1}`);
  const optsEl = document.getElementById(`options-p${partNum+1}`);
  const nextBtn = document.getElementById(`next-p${partNum+1}`);

  qEl.textContent = `${idxCur+1}. ${questionObj.q}`;
  optsEl.innerHTML="";

  questionObj.opts.forEach((optText,optIndex)=>{
    const btn = document.createElement("button");
    btn.className="btn option-btn";
    btn.textContent = optText;
    btn.onclick = ()=>{
      if(btn.disabled) return;

      if(optIndex === questionObj.a){
        btn.classList.add("correct"); // jawb sahih → khdar
        score[partNum]++;
      } else {
        btn.classList.add("wrong");   // jawb ghalat → hmer
        // afficher le correct
        optsEl.querySelectorAll(".option-btn")[questionObj.a].classList.add("correct");
      }

      // disable tous les boutons
      optsEl.querySelectorAll(".option-btn").forEach(b=>b.disabled=true);
      nextBtn.style.display="inline-block";
    };
    optsEl.appendChild(btn);
  });

  nextBtn.style.display="none";
  document.getElementById(`progress-p${partNum+1}`).textContent = `Question ${idxCur+1} / ${part.length}`;
}

// ------------------ INITIALIZE PARTS ------------------
for(let i=0;i<4;i++){
  ((partNum)=>{
    const nextBtn = document.getElementById(`next-p${partNum+1}`);
    nextBtn.onclick = ()=>{
      idx[partNum]++;
      if(idx[partNum]<parts[partNum].length){
        renderBlock(partNum);
      } else {
        document.getElementById(`quiz-part${partNum+1}`).style.display="none";
        if(partNum===3) showFinal();
      }
    };
    renderBlock(partNum);
  })(i);
}

// ------------------ SHOW FINAL RESULTS ------------------
function showFinal(){
  document.getElementById("final-results").style.display="block";
  const totalScore = score.reduce((a,b)=>a+b,0);
  const totalQuestions = parts.reduce((a,b)=>a+b.length,0);
  document.getElementById("final-score").textContent=`Total: ${totalScore} / ${totalQuestions}`;
  const breakdown=document.getElementById("breakdown");
  breakdown.innerHTML=`<ul>
    <li>Part 1 score: ${score[0]} / ${parts[0].length}</li>
    <li>Part 2 score: ${score[1]} / ${parts[1].length}</li>
    <li>Part 3 score: ${score[2]} / ${parts[2].length}</li>
    <li>Part 4 score: ${score[3]} / ${parts[3].length}</li>
  </ul>`;
  document.getElementById("restart").onclick=(e)=>{e.preventDefault(); location.reload();};
}
