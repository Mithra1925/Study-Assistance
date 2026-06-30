// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const contact = {
        name,
        email,
        subject,
        message,
        date: new Date().toLocaleString()
    };

    let messages =
    JSON.parse(localStorage.getItem("messages")) || [];

    messages.push(contact);

    localStorage.setItem(
        "messages",
        JSON.stringify(messages)
    );

    alert("✅ Your message has been sent successfully!");

    contactForm.reset();

});