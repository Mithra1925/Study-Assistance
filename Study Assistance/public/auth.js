// signup
// SIGNUP

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const password=document.getElementById("password").value;

const confirmPassword=document.getElementById("confirmPassword").value;

if(password!==confirmPassword){

alert("Passwords do not match!");

return;

}

const user={

name,

email,

password

};

localStorage.setItem("user",JSON.stringify(user));

alert("Account Created Successfully!");

window.location.href="login.html";

});

}

//login

// LOGIN

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("loginEmail").value;

const password=document.getElementById("loginPassword").value;

const savedUser=JSON.parse(localStorage.getItem("user"));

if(

savedUser &&

savedUser.email===email &&

savedUser.password===password

){

alert("Login Successful!");

window.location.href="dashboard.html";

}

else{

alert("Invalid Email or Password");

}

});

}