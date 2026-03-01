// ------------------ DATA ------------------
const part1 = [
  {q:"PHP est un langage :", opts:["Côté serveur","Côté client","CSS","SQL"], a:0},
  {q:"Pour afficher du texte en PHP, on utilise :", opts:["echo","printscreen","write","console.log"], a:0},
  {q:"Une variable PHP commence par :", opts:["$","@","%","#"], a:0},
  {q:"Un commentaire PHP commence par :", opts:["// ou /* */","<!-- -->","##","**"], a:0},
  {q:"PHP peut interagir avec :", opts:["MySQL","CSS","HTML uniquement","JavaScript sans serveur"], a:0}
];

const part2 = [
  {q:"Pour récupérer une donnée POST d'un formulaire :", opts:["$_POST['nom']","$_GET['nom']","$_FORM['nom']","$_DATA['nom']"], a:0},
  {q:"Pour vérifier si un formulaire est soumis :", opts:["isset($_POST['submit'])","if(form.submit)","submit.checked","isset(form)"], a:0},
  {q:"Les formulaires HTML utilisent :", opts:["method et action","name et id","src et href","value et style"], a:0},
  {q:"$_GET permet de :", opts:["Envoyer des données via l'URL","Envoyer des fichiers","Modifier CSS","Compiler PHP"], a:0},
  {q:"La validation côté serveur se fait :", opts:["En PHP","En CSS","En HTML seulement","En JS uniquement"], a:0}
];

const part3 = [
  {q:"Pour créer une base MySQL :", opts:["CREATE DATABASE nom","CREATE TABLE nom","INSERT INTO","SELECT FROM"], a:0},
  {q:"Pour créer une table :", opts:["CREATE TABLE","CREATE DATABASE","INSERT TABLE","SELECT DATABASE"], a:0},
  {q:"INSERT INTO sert à :", opts:["Ajouter des données","Supprimer une table","Modifier CSS","Créer une boucle"], a:0},
  {q:"SELECT ... FROM ... sert à :", opts:["Lire les données","Créer une classe PHP","Modifier des formulaires","Créer des boucles"], a:0},
  {q:"UPDATE ... SET ... WHERE ... sert à :", opts:["Modifier des données existantes","Créer des tables","Compiler PHP","Supprimer CSS"], a:0}
];

const part4 = [
  {q:"Pour éviter l'injection SQL :", opts:["Utiliser prepared statements","Écrire CSS","Ignorer la sécurité","Utiliser echo"], a:0},
  {q:"Les mots de passe doivent être :", opts:["Hashés","En clair","Visible dans HTML","Stockés en JS"], a:0},
  {q:"Validation des données :", opts:["Évite les erreurs et attaques","Est inutile","Modifie les CSS","Change le JS"], a:0},
  {q:"Sessions PHP servent à :", opts:["Garder des données utilisateur","Modifier CSS","Créer une boucle","Compiler PHP"], a:0},
  {q:"Bonnes pratiques :", opts:["Séparer logique et présentation","Tout mettre dans un fichier","Ignorer la sécurité","Ne pas commenter le code"], a:0}
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
