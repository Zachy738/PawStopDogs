const form = document.getElementById("bookingForm");


form.addEventListener("submit", function(e){

e.preventDefault();


let name=document.getElementById("owner").value;
let dog=document.getElementById("dog").value;
let service=document.getElementById("service").value;


document.getElementById("confirmation").innerHTML =
"✅ Booking confirmed for " + dog + "! We will contact " + name;


localStorage.setItem(
"booking",
JSON.stringify({
name:name,
dog:dog,
service:service
})
);


form.reset();


});