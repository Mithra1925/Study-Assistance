// ===============================
// OFFICIAL SUBJECTS
// ===============================

const studyNotes = {

    DSA:{
        pdf:"pdfs/DSA.pdf",
        tutorial:"https://www.youtube.com/results?search_query=DSA+Playlist"
    },

    Python:{
        pdf:"pdfs/Python.pdf",
        tutorial:"https://www.youtube.com/results?search_query=Python+Playlist"
    },

    JavaScript:{
        pdf:"pdfs/JavaScript.pdf",
        tutorial:"https://www.youtube.com/results?search_query=JavaScript+Playlist"
    },

    HTML:{
        pdf:"pdfs/HTML.pdf",
        tutorial:"https://www.youtube.com/results?search_query=HTML+Playlist"
    },

    CSS:{
        pdf:"pdfs/CSS.pdf",
        tutorial:"https://www.youtube.com/results?search_query=CSS+Playlist"
    },

    "Node.js":{
        pdf:"pdfs/NodeJS.pdf",
        tutorial:"https://www.youtube.com/results?search_query=NodeJS+Playlist"
    },

    React:{
        pdf:"pdfs/React.pdf",
        tutorial:"https://www.youtube.com/results?search_query=React+Playlist"
    },

    MongoDB:{
        pdf:"pdfs/MongoDB.pdf",
        tutorial:"https://www.youtube.com/results?search_query=MongoDB+Playlist"
    },

    DBMS:{
        pdf:"pdfs/DBMS.pdf",
        tutorial:"https://www.youtube.com/results?search_query=DBMS+Playlist"
    },

    OS:{
        pdf:"pdfs/OS.pdf",
        tutorial:"https://www.youtube.com/results?search_query=Operating+System+Playlist"
    },

    CN:{
        pdf:"pdfs/CN.pdf",
        tutorial:"https://www.youtube.com/results?search_query=Computer+Networks+Playlist"
    },

    AI:{
        pdf:"pdfs/AI.pdf",
        tutorial:"https://www.youtube.com/results?search_query=Artificial+Intelligence+Playlist"
    }

};

// ===============================
// VIEW SUBJECT
// ===============================

const viewer = document.getElementById("viewer");

function showSubject(subject){

    viewer.innerHTML=`

        <h2>${subject}</h2>

        <p>

        Complete notes for ${subject} are available.

        Choose an option below.

        </p>

        <a href="${studyNotes[subject].pdf}" target="_blank">

            <button class="viewBtn">

            📖 View Notes

            </button>

        </a>

        <a href="${studyNotes[subject].pdf}" download>

            <button class="downloadBtn">

            📥 Download Notes

            </button>

        </a>

        <a href="${studyNotes[subject].tutorial}" target="_blank">

            <button class="tutorialBtn">

            🎥 Watch Tutorial

            </button>

        </a>

    `;

}

// ===============================
// SEARCH SUBJECTS
// ===============================

function searchSubjects(){

    const input=document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const cards=document.querySelectorAll(".subject-card");

    cards.forEach(card=>{

        if(card.innerText.toLowerCase().includes(input)){

            card.style.display="block";

        }

        else{

            card.style.display="none";

        }

    });

}

// ===============================
// PERSONAL NOTES
// ===============================

let notes=
JSON.parse(localStorage.getItem("notes"))||[];

let editIndex=-1;

const form=document.getElementById("noteForm");

const savedNotes=document.getElementById("savedNotes");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const title=document.getElementById("title").value;

    const topic=document.getElementById("topic").value;

    const description=document.getElementById("description").value;

    const note={

        title,
        topic,
        description

    };

    if(editIndex==-1){

        notes.push(note);

    }

    else{

        notes[editIndex]=note;

        editIndex=-1;

    }

    localStorage.setItem(

        "notes",

        JSON.stringify(notes)

    );

    form.reset();

    displayNotes();

});

// ===============================
// DISPLAY NOTES
// ===============================

function displayNotes(){

    savedNotes.innerHTML="";

    notes.forEach((note,index)=>{

        savedNotes.innerHTML+=`

        <div class="note-card">

            <h3>${note.title}</h3>

            <h4>${note.topic}</h4>

            <p>

            ${note.description}

            </p>

            <button

            class="editBtn"

            onclick="editNote(${index})">

            ✏ Edit

            </button>

            <button

            class="deleteBtn"

            onclick="deleteNote(${index})">

            🗑 Delete

            </button>

        </div>

        `;

    });

}

// ===============================
// EDIT
// ===============================

function editNote(index){

    document.getElementById("title").value=notes[index].title;

    document.getElementById("topic").value=notes[index].topic;

    document.getElementById("description").value=notes[index].description;

    editIndex=index;

}

// ===============================
// DELETE
// ===============================

function deleteNote(index){

    if(confirm("Delete this note?")){

        notes.splice(index,1);

        localStorage.setItem(

        "notes",

        JSON.stringify(notes)

        );

        displayNotes();

    }

}

// ===============================

displayNotes();