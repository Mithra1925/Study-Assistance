// =====================================
// Greeting
// =====================================

const hour = new Date().getHours();

const greeting = document.getElementById("greeting");

if(hour < 12){

    greeting.innerHTML = "☀️ Good Morning, Mithra 👋";

}

else if(hour < 18){

    greeting.innerHTML = "🌤 Good Afternoon, Mithra 👋";

}

else{

    greeting.innerHTML = "🌙 Good Evening, Mithra 👋";

}

// =====================================
// Today's Date
// =====================================

const today = new Date();

document.getElementById("todayDate").innerHTML =
today.toDateString();

// =====================================
// Notes Count
// =====================================

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

document.getElementById("noteCount").innerHTML =
notes.length;

// =====================================
// Quiz Count
// =====================================

let quizCount =
localStorage.getItem("quizCount") || 0;

document.getElementById("quizCount").innerHTML =
quizCount;

// =====================================
// Recent Notes
// =====================================

const recentNotes =
document.getElementById("recentNotes");

if(notes.length==0){

recentNotes.innerHTML=`

<p>No Notes Created Yet.</p>

`;

}

else{

let recent =
notes.slice(-4).reverse();

recent.forEach(note=>{

recentNotes.innerHTML += `

<div class="recent-card">

<h3>${note.title}</h3>

<p>${note.topic}</p>

<p>${note.description.substring(0,80)}...</p>

</div>

`;

});

}

// =====================================
// Motivation Quotes
// =====================================

const quotes=[

"📚 Small progress every day leads to big success.",

"💡 Stay consistent, success will follow.",

"🚀 Learn something new every day.",

"🔥 Discipline beats motivation.",

"🏆 Your future is created by what you do today.",

"🎯 Focus on progress, not perfection.",

"📖 The expert in anything was once a beginner.",

"⭐ Dream big. Work hard. Stay humble."

];

const randomQuote =
quotes[Math.floor(Math.random()*quotes.length)];

document.getElementById("quote").innerHTML =
randomQuote;

// =====================================
// Today's Tasks
// Save Checkbox State
// =====================================

const checkboxes =
document.querySelectorAll(".task-box input");

checkboxes.forEach((box,index)=>{

box.checked =
localStorage.getItem("task"+index)=="true";

box.addEventListener("change",()=>{

localStorage.setItem(

"task"+index,

box.checked

);

});

});

// =====================================
// Dashboard Loaded
// =====================================

console.log("Dashboard Loaded Successfully");