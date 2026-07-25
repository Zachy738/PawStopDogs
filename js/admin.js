let users =
JSON.parse(localStorage.getItem("users")) || [];


let providers =
JSON.parse(localStorage.getItem("providers")) || [];


let adminRequests =
JSON.parse(localStorage.getItem("adminRequests")) || [];



document.getElementById("users").innerHTML =
users.length ?

users.map(user=>`

<p>
👤 ${user.name}
<br>
📧 ${user.email}
</p>

`).join("")


:

"No users";





document.getElementById("listings").innerHTML =
providers.length ?

providers.map(provider=>`

<p>

🐶 ${provider.name}

<br>

${provider.service}

<br>

📍 ${provider.location}

</p>

`).join("")


:

"No listings";






let allMessages = [];

Object.keys(localStorage)

.forEach(key=>{


if(key.startsWith("chat_")){


allMessages.push(

JSON.parse(
localStorage.getItem(key)
)

);


}


});



document.getElementById("messages").innerHTML =

allMessages.length ?

JSON.stringify(allMessages,null,2)

:

"No messages";





document.getElementById("requests").innerHTML =

adminRequests.length ?

adminRequests.map(request=>`

<p>

${request.email}

<button onclick="approve('${request.email}')">

Approve

</button>

</p>

`).join("")


:

"No requests";





function approve(email){


alert(
email+" approved as admin"
);


}