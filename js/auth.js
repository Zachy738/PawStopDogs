// SIGNUP

let signup = document.getElementById("signupForm");


if(signup){

signup.addEventListener("submit", e=>{

e.preventDefault();


let user={

name:document.getElementById("name").value,

email:document.getElementById("email").value,

password:document.getElementById("password").value

};


localStorage.setItem(
"user",
JSON.stringify(user)
);


alert("Account created!");

window.location="index.html";


});

}




// LOGIN


let login=document.getElementById("loginForm");


if(login){

login.addEventListener("submit",e=>{

e.preventDefault();


let user=
JSON.parse(localStorage.getItem("user"));



if(
user &&
user.email ==
document.getElementById("loginEmail").value &&
user.password ==
document.getElementById("loginPassword").value
){


alert("Logged in!");

localStorage.setItem("loggedIn","true");

window.location="index.html";


}

else{

alert("Wrong login");

}


});


}