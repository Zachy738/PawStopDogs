const form =
document.getElementById("providerForm");



form.addEventListener(
"submit",
function(e){


e.preventDefault();



let providers =
JSON.parse(
localStorage.getItem("providers")
) || [];




let provider = {


id: Date.now(),


name:
document.getElementById("providerName").value,


service:
document.getElementById("serviceType").value,


location:
document.getElementById("location").value,


latitude:
document.getElementById("latitude").value,


longitude:
document.getElementById("longitude").value,


description:
document.getElementById("description").value,


price:
document.getElementById("price").value,


rating:
document.getElementById("rating").value



};




providers.push(provider);



localStorage.setItem(

"providers",

JSON.stringify(providers)

);




alert(
"Listing created!"
);



window.location =
"map.html";



});