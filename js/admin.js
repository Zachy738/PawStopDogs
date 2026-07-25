const ADMIN_EMAIL = "zlrm587@gmail.com";


let allUsers = [];
let allListings = [];




async function checkAdmin(){


const {data,error} =
await supabaseClient.auth.getUser();



if(error || !data.user){

window.location.href="login.html";

return;

}



if(data.user.email !== ADMIN_EMAIL){

alert("No admin access");

window.location.href="index.html";

return;

}



loadDashboard();


}





async function loadDashboard(){


loadUsers();

loadListings();

loadMessages();


}





async function loadUsers(){


const {data,error} =
await supabaseClient
.from("profiles")
.select("*");



if(error){

console.log(error);

return;

}



allUsers=data;



document.getElementById("userCount").innerText =
data.length;



displayUsers(data);



}





function displayUsers(users){


const box =
document.getElementById("users");


box.innerHTML="";



users.forEach(user=>{


box.innerHTML += `

<div class="admin-card">


<h3>
👤 ${user.username || "User"}
</h3>


<p>
${user.email || ""}
</p>


</div>

`;



});


}







async function loadListings(){


const {data,error} =
await supabaseClient
.from("listings")
.select("*");



if(error){

console.log(error);

return;

}



allListings=data;



document.getElementById("listingCount").innerText =
data.length;



displayListings(data);



}







function displayListings(listings){


const box =
document.getElementById("listings");


box.innerHTML="";



listings.forEach(item=>{


box.innerHTML += `

<div class="admin-card">


<h3>
🐶 ${item.business_name}
</h3>


<p>
📍 ${item.location}
</p>



<button onclick="deleteListing('${item.id}')">

🗑 Delete

</button>



</div>

`;



});


}







async function deleteListing(id){


if(!confirm("Delete this listing?")) return;



await supabaseClient
.from("listings")
.delete()
.eq("id",id);



alert("Deleted");


loadListings();


}








async function loadMessages(){


const {data,error} =
await supabaseClient
.from("messages")
.select("*");



if(!error){


document.getElementById("messageCount").innerText =
data.length;


}


}







function searchAll(){


let text =
document.getElementById("searchBox")
.value
.toLowerCase();



let users =
allUsers.filter(user=>

JSON.stringify(user)
.toLowerCase()
.includes(text)

);



let listings =
allListings.filter(item=>

JSON.stringify(item)
.toLowerCase()
.includes(text)

);



displayUsers(users);

displayListings(listings);



}





checkAdmin();