// =========================
// Tutorials Database
// =========================


const tutorials = {

DSA:[

{

title:"Complete DSA Playlist",

channel:"Take U Forward",

duration:"44 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=take+u+forward+dsa"

},

{

title:"Striver A2Z DSA Sheet",

channel:"Take U Forward",

duration:"Playlist",

level:"Intermediate",

link:"https://www.youtube.com/results?search_query=striver+a2z"

}

],

Python:[

{

title:"Python Full Course",

channel:"CodeWithHarry",

duration:"12 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=python+codewithharry"

},

{

title:"Python for Beginners",

channel:"Programming with Mosh",

duration:"6 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=python+mosh"

}

],

JavaScript:[

{

title:"JavaScript Full Course",

channel:"Apna College",

duration:"10 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=javascript+apna+college"

}

],

HTML:[

{

title:"HTML Complete Course",

channel:"Apna College",

duration:"5 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=html+apna+college"

}

],

CSS:[

{

title:"CSS Complete Course",

channel:"Apna College",

duration:"6 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=css+apna+college"

}

],

"Node.js":[

{

title:"Node.js Crash Course",

channel:"CodeWithHarry",

duration:"8 Hours",

level:"Intermediate",

link:"https://www.youtube.com/results?search_query=nodejs+codewithharry"

}

],

React:[

{

title:"React Complete Course",

channel:"Apna College",

duration:"12 Hours",

level:"Intermediate",

link:"https://www.youtube.com/results?search_query=react+apna+college"

}

],

MongoDB:[

{

title:"MongoDB Course",

channel:"CodeWithHarry",

duration:"5 Hours",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=mongodb+codewithharry"

}

],

DBMS:[

{

title:"DBMS Playlist",

channel:"Gate Smashers",

duration:"40 Videos",

level:"Intermediate",

link:"https://www.youtube.com/results?search_query=dbms+gate+smashers"

}

],

OS:[

{

title:"Operating Systems",

channel:"Gate Smashers",

duration:"35 Videos",

level:"Intermediate",

link:"https://www.youtube.com/results?search_query=os+gate+smashers"

}

],

CN:[

{

title:"Computer Networks",

channel:"Gate Smashers",

duration:"30 Videos",

level:"Intermediate",

link:"https://www.youtube.com/results?search_query=computer+networks+gate+smashers"

}

],

AI:[

{

title:"Artificial Intelligence",

channel:"Simplilearn",

duration:"Playlist",

level:"Beginner",

link:"https://www.youtube.com/results?search_query=artificial+intelligence+playlist"

}

]

};

// =========================

const tutorialContainer =
document.getElementById("tutorialContainer");

// =========================

function showTutorials(subject){

tutorialContainer.innerHTML="";

tutorials[subject].forEach((video,index)=>{

tutorialContainer.innerHTML += `

<div class="tutorial-card">

<h2>${video.title}</h2>

<p><b>Channel :</b> ${video.channel}</p>

<p><b>Duration :</b> ${video.duration}</p>

<p><b>Level :</b> ${video.level}</p>

<div class="tutorial-buttons">

<button

onclick="watchTutorial('${subject}',${index})"

class="watchBtn">

▶ Watch

</button>

<button

onclick="saveFavorite('${subject}',${index})"

class="favoriteBtn">

⭐ Save

</button>

</div>

</div>

`;

});

}




function watchTutorial(subject,index){

const video=tutorials[subject][index];

window.open(video.link,"_blank");

localStorage.setItem(

"recentTutorial",

JSON.stringify(video)

);

displayRecent();

}

// =========================

function searchTutorials(){

const value=document.getElementById("tutorialSearch").value.toLowerCase();

const cards=document.querySelectorAll("#tutorialSubjects .subject-card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}

});

}