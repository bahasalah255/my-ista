// ------------------ QUIZ DATA ------------------
// Partie 1
const quizJS1 = [
  {q:"Quelle est la bonne syntaxe pour déclarer une variable en JS ?", options:["var x = 10;","int x = 10;","let x 10;","x = 10;"], correct:0},
  {q:"Comment créer une fonction en JS ?", options:["function maFonction(){}","def maFonction()","func maFonction()","create maFonction()"], correct:0},
  {q:"Quelle méthode permet d'afficher une alerte ?", options:["alert('Hello')","console.log('Hello')","prompt('Hello')","write('Hello')"], correct:0},
  {q:"Comment créer un tableau ?", options:["let arr = [1,2,3];","let arr = (1,2,3);","let arr = {1,2,3};","let arr = <1,2,3>;"], correct:0},
  {q:"Quelle est la bonne façon d'écrire une condition ?", options:["if(x>10){}","if x>10 then {}","if x>10 {}","if x>10:"], correct:0},
  {q:"Comment accéder au premier élément d'un tableau ?", options:["arr[0]","arr(1)","arr.first","arr[1]"], correct:0},
  {q:"Quel opérateur est utilisé pour l'égalité stricte ?", options:["===","==","=","!="], correct:0},
  {q:"Comment ajouter un élément à la fin d'un tableau ?", options:["arr.push(5)","arr.add(5)","arr.append(5)","arr.insert(5)"], correct:0},
  {q:"Comment créer un objet ?", options:["let obj = {nom:'John',age:30};","let obj = [nom:'John',age:30];","let obj = object('John',30);","let obj = (nom:'John',age:30);"], correct:0},
  {q:"Quelle méthode permet de parcourir un tableau ?", options:["arr.forEach()","arr.loop()","for arr in array","arr.mapAll()"], correct:0}
];

// Partie 2
const quizJS2 = [
  {q:"Comment convertir une chaîne en nombre ?", options:["Number('123')","parseInt('123')","+'123'","Toutes les réponses sont correctes"], correct:3},
  {q:"Comment détecter le type d'une variable ?", options:["typeof x","type x","getType(x)","typeOf(x)"], correct:0},
  {q:"Quelle est la différence entre let et var ?", options:["Scope de bloc vs global","Pas de différence","Var plus rapide","Let ne peut pas changer"], correct:0},
  {q:"Comment créer une promesse ?", options:["new Promise((resolve,reject)=>{})","promise(()=>{})","create Promise()","Promise()"], correct:0},
  {q:"Comment gérer une exception ?", options:["try { } catch(e) { }","if error {}","catch { }","try catch {}"], correct:0},
  {q:"Quelle méthode permet de trier un tableau ?", options:["arr.sort()","arr.order()","arr.rank()","arr.sorted()"], correct:0},
  {q:"Comment créer une classe ?", options:["class Person {}","class: Person {}","new class Person {}","create class Person {}"], correct:0},
  {q:"Comment hériter d'une classe ?", options:["class Etudiant extends Person {}","class Etudiant inherit Person {}","class Etudiant : Person {}","Etudiant = Person"], correct:0},
  {q:"Comment créer un module exporté ?", options:["export function maFonction(){}","module maFonction()","export maFonction()","function export maFonction()"], correct:0},
  {q:"Comment importer un module ?", options:["import {maFonction} from './file.js'","require('./file.js')","load('./file.js')","import maFonction from './file.js'"], correct:0}
];

// Partie 3
const quizJS3 = [
  {q:"Quel événement se déclenche au clic ?", options:["click","onclick","tap","press"], correct:0},
  {q:"Comment sélectionner un élément par id ?", options:["document.getElementById('id')","$('#id')","document.querySelector('#id')","getElement('id')"], correct:0},
  {q:"Comment modifier le texte d'un élément ?", options:["el.textContent = 'Hello'","el.innerText = 'Hello'","el.value = 'Hello'","el.html = 'Hello'"], correct:0},
  {q:"Comment ajouter une classe à un élément ?", options:["el.classList.add('active')","el.addClass('active')","el.setClass('active')","el.class='active'"], correct:0},
  {q:"Comment supprimer une classe ?", options:["el.classList.remove('active')","el.removeClass('active')","el.deleteClass('active')","el.class='remove'"], correct:0},
  {q:"Quelle méthode écoute un événement ?", options:["el.addEventListener('click',fn)","el.on('click',fn)","el.listen('click',fn)","el.observe('click',fn)"], correct:0},
  {q:"Comment empêcher le comportement par défaut ?", options:["e.preventDefault()","e.stop()","return false","e.cancel()"], correct:0},
  {q:"Comment parcourir un NodeList ?", options:["nodeList.forEach(fn)","for node in nodeList","nodeList.map(fn)","nodeList.loop(fn)"], correct:0},
  {q:"Comment créer un élément HTML ?", options:["document.createElement('div')","document.newElement('div')","document.make('div')","document.add('div')"], correct:0},
  {q:"Comment ajouter un élément au DOM ?", options:["parent.appendChild(child)","parent.add(child)","parent.append(child)","document.addChild(child)"], correct:0}
];

// ------------------ STATE ------------------
let score = 0;

// ------------------ RENDER FUNCTION ------------------
function renderQuiz(quizData, idx, questionElId, optionsElId, nextBtnId, progressElId, onComplete) {
  if(idx >= quizData.length) {
    onComplete();
    return;
  }
  const qObj = quizData[idx];
  const questionEl = document.getElementById(questionElId);
  const optionsEl = document.getElementById(optionsElId);

  questionEl.textContent = `${idx+1}. ${qObj.q}`;
  optionsEl.innerHTML = "";

  qObj.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = ()=>{
      if(btn.disabled) return;
      if(i===qObj.correct) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
        optionsEl.querySelectorAll(".option-btn").forEach((b,j)=>{
          if(j===qObj.correct) b.classList.add("correct");
        });
      }
      optionsEl.querySelectorAll(".option-btn").forEach(b=>b.disabled=true);
      document.getElementById(nextBtnId).style.display="inline-block";
    };
    optionsEl.appendChild(btn);
  });

  document.getElementById(progressElId).textContent = `Question ${idx+1} / ${quizData.length}`;

  document.getElementById(nextBtnId).onclick = ()=>{
    renderQuiz(quizData, idx+1, questionElId, optionsElId, nextBtnId, progressElId, onComplete);
  };
}

// ------------------ START QUIZ ------------------
document.addEventListener("DOMContentLoaded",()=>{
  // Partie 1
  renderQuiz(quizJS1,0,"question-js1","options-js1","next-js1","progress-js1",()=>{
    document.getElementById("quiz-js1").style.display="none";
    document.getElementById("quiz-js2").style.display="block";

    renderQuiz(quizJS2,0,"question-js2","options-js2","next-js2","progress-js2",()=>{
      document.getElementById("quiz-js2").style.display="none";
      document.getElementById("quiz-js3").style.display="block";

      renderQuiz(quizJS3,0,"question-js3","options-js3","next-js3","progress-js3",()=>{
        document.getElementById("quiz-js3").style.display="none";
        document.getElementById("final-results").style.display="block";
        document.getElementById("final-score").textContent = `Score: ${score} / 30`;
        document.getElementById("breakdown").innerHTML = `<ul>
          <li>Partie 1: ${score} / 10</li>
          <li>Partie 2: ${score} / 10</li>
          <li>Partie 3: ${score} / 10</li>
        </ul>`;
        document.getElementById("restart").onclick = (e)=>{ e.preventDefault(); location.reload(); };
      });
    });
  });
});
