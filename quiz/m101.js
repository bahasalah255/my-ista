// ------------------ données ------------------
const part1 = [
    { q: "Quel est le rôle principal des techniciens spécialisés en développement informatique ?", options: ["Gérer les réseaux", "Développer des systèmes de gestion", "Réaliser des études de marché", "Assurer le service client"], correct: 1 },
    { q: "Quelles langues de programmation sont essentielles ?", options: ["HTML, CSS", "Java, C++", "SQL, Python", "PHP, Ruby"], correct: 1 },
    { q: "Quelle compétence est nécessaire pour comprendre la documentation technique ?", options: ["Mathématiques avancées", "Maîtrise de l’anglais", "Conception graphique", "Gestion de projet"], correct: 1 },
    { q: "Laquelle des tâches n’est PAS une responsabilité d’un technicien ?", options: ["Développer des applications", "Animer des formations", "Analyser les besoins", "Gérer les ressources humaines"], correct: 3 },
    { q: "Quel est un environnement de travail courant ?", options: ["Magasins", "Bureaux d’entreprise", "Extérieur", "Usines"], correct: 1 },
    { q: "Quel concept mathématique est important ?", options: ["Géométrie", "Algèbre", "Trigonométrie", "Statistiques"], correct: 1 },
    { q: "Quelle qualité personnelle est recherchée ?", options: ["Autonomie", "Compétences graphiques", "Prise de parole", "Réseautage"], correct: 0 },
    { q: "Aspect crucial du développement logiciel ?", options: ["Ignorer les retours", "Contrôle de qualité", "Peu de documentation", "Prototypage"], correct: 1 },
    { q: "Compétence requise pour gérer les données ?", options: ["SQL", "Marketing", "Relation client", "Événementiel"], correct: 0 },
    { q: "Essentiel pour communiquer avec les clients ?", options: ["Jargon technique", "Français", "Simplifier l’info", "Termes stricts"], correct: 2 },
    { q: "Outil de prototypage ?", options: ["Word", "Graphisme", "SGBD", "Projets"], correct: 1 },
    { q: "Défi des techniciens ?", options: ["Pas d’emplois", "Stress systèmes", "Peu de tech", "Trop de vacances"], correct: 1 },
    { q: "Importance du flux des données ?", options: ["Graphisme", "Normalisation", "UX", "Temps de code"], correct: 1 },
    { q: "Analyse cruciale pour normalisation ?", options: ["Qualitative", "Quantitative", "Organique", "Fonctionnelle"], correct: 3 },
    { q: "Qualité essentielle pour évoluer ?", options: ["Stagnation", "Flexibilité", "Rigidité", "Indifférence"], correct: 1 }
];

const part2 = [ 
    { q: "Que signifie CAD ?", options: ["Comité d’Analyse", "Comité d’Autodiscipline", "Centre d’Apprentissage"], correct: 1 },
    { q: "Que signifie CC ?", options: ["Centre Commercial", "Contrôle Continu", "Cours Combiné"], correct: 1 },
    { q: "Que signifie CD ?", options: ["Conseil de Discipline", "Cours à Distance", "Certificat Débutant"], correct: 0 },
    { q: "Que signifie CV ?", options: ["Curriculum Vitae", "Cours Virtuel", "Classe Vérifiée"], correct: 0 },
    { q: "Que signifie DR ?", options: ["Direction Régionale", "Direction Rurale", "Département Ressources"], correct: 0 },
    { q: "Que signifie EFPM ?", options: ["Espace Projet", "Fin de Module", "Formations Modernes"], correct: 1 },
    { q: "Que signifie FC ?", options: ["Formation Créative", "Formation Continue", "Formation Commerciale"], correct: 1 },
    { q: "Que signifie PI ?", options: ["Programme Intensif", "Plan Intervention", "Formation Initiale"], correct: 2 },
    { q: "Que signifie TDI ?", options: ["Technicien Dév Info", "Travailleur Info", "Documentation Industrielle"], correct: 0 },
    { q: "Que signifie TSRE ?", options: ["Réparation Électronique", "Recherche Emploi", "Réseaux Entreprises"], correct: 2 }
];

// ------------------ état ------------------
let idx1=0, score1=0;
let idx2=0, score2=0;

// ------------------ helper render ------------------
function renderBlock(part, idx, qElId, optsElId, nextBtnId, progressId) {
    const questionObj = part[idx];
    document.getElementById(qElId).textContent = `${idx+1}. ${questionObj.q}`;
    const optsContainer = document.getElementById(optsElId);
    optsContainer.innerHTML = "";
    questionObj.options.forEach((optText,optIndex)=>{
        const btn = document.createElement("button");
        btn.type="button";
        btn.className="btn btn-outline-secondary option-btn";
        btn.textContent = optText;
        btn.onclick = ()=>{
            if(btn.disabled) return;
            if(optIndex===questionObj.correct) {
                btn.classList.add("correct");
                if(nextBtnId==="next-p1") score1++;
                if(nextBtnId==="next-p2") score2++;
            } else {
                btn.classList.add("wrong");
                const siblings = optsContainer.querySelectorAll(".option-btn");
                siblings.forEach((s,i)=>{ if(i===questionObj.correct) s.classList.add("correct"); });
            }
            optsContainer.querySelectorAll(".option-btn").forEach(b=>b.disabled=true);
            document.getElementById(nextBtnId).style.display="inline-block";
        };
        optsContainer.appendChild(btn);
    });
    document.getElementById(progressId).textContent = `Question ${idx+1} / ${part.length}`;
    document.getElementById(nextBtnId).style.display="none";
}

// ------------------ start & next ------------------
function startPart1() { renderBlock(part1,idx1,"question-p1","options-p1","next-p1","progress-p1"); }
document.getElementById("next-p1").onclick = ()=>{
    idx1++;
    if(idx1<part1.length) startPart1();
    else { document.getElementById("quiz-part1").style.display="none"; window.scrollTo({top:0,behavior:"smooth"}); }
};
startPart1();

function startPart2() { renderBlock(part2,idx2,"question-p2","options-p2","next-p2","progress-p2"); }
document.getElementById("next-p2").onclick = ()=>{
    idx2++;
    if(idx2<part2.length) startPart2();
    else { document.getElementById("quiz-part2").style.display="none"; showFinal(); window.scrollTo({top:0,behavior:"smooth"}); }
};
startPart2();

// ------------------ résultats finaux ------------------
function showFinal(){
    document.getElementById("final-results").style.display="block";
    const totalScore = score1 + score2;
    const totalQuestions = part1.length + part2.length;
    document.getElementById("final-score").textContent = `Total: ${totalScore} / ${totalQuestions}`;
    const breakdown = document.getElementById("breakdown");
    breakdown.innerHTML = `<ul>
        <li>Partie 1 score: ${score1} / ${part1.length}</li>
        <li>Partie 2 score: ${score2} / ${part2.length}</li>
    </ul>`;
    document.getElementById("restart").onclick = (e)=>{
        e.preventDefault();
        location.reload();
    };
}
