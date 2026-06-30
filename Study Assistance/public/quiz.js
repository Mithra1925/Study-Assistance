const quizData = {

DSA:[
{
question:"Which data structure follows FIFO?",
options:["Stack","Queue","Tree","Graph"],
answer:"Queue"
},
{
question:"Which data structure follows LIFO?",
options:["Queue","Stack","Tree","Graph"],
answer:"Stack"
}
],

Python:[
{
question:"Python is a ____ language.",
options:["Compiled","Interpreted","Assembly","Machine"],
answer:"Interpreted"
},
{
question:"Which keyword is used to define a function?",
options:["fun","define","def","function"],
answer:"def"
}
],

JavaScript:[
{
question:"Which keyword declares a variable?",
options:["let","loop","print","varies"],
answer:"let"
}
]

};

let currentSubject = "";
let currentQuestion = 0;
let score = 0;



function selectSubject(subject){

currentSubject = subject;

currentQuestion = 0;

score = 0;

showQuestion();

}



function showQuestion(){

const q = quizData[currentSubject][currentQuestion];

document.getElementById("quizContainer").innerHTML = `

<h2>${currentSubject} Quiz</h2>

<h3>${q.question}</h3>

${q.options.map(option => `
<button onclick="checkAnswer('${option}')">
${option}
</button><br><br>
`).join("")}

`;

}





function checkAnswer(selected){

const q = quizData[currentSubject][currentQuestion];

if(selected === q.answer){

score++;

}

currentQuestion++;

if(currentQuestion < quizData[currentSubject].length){

showQuestion();

}
else{

document.getElementById("quizContainer").innerHTML = `

<h2>🎉 Quiz Completed!</h2>

<h3>Your Score: ${score} / ${quizData[currentSubject].length}</h3>

<button onclick="selectSubject('${currentSubject}')">

Restart Quiz

</button>

`;

}

}




function searchQuizSubject(){

const value = document.getElementById("quizSearch").value.toLowerCase();

const cards = document.querySelectorAll("#quizSubjects .subject-card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}
else{

card.style.display="none";

}

});

}