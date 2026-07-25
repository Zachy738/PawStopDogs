let profile =
document.getElementById("profile");



let provider =
JSON.parse(
localStorage.getItem("selectedProvider")
);



if(provider){


profile.innerHTML = `


<div class="provider-profile">


<div class="big-dog">
🐶
</div>


<h1>
${provider.name}
</h1>


<h3>
⭐ ${provider.rating}
</h3>


<p>
📍 ${provider.location}
</p>


<p>
✂️ ${provider.service}
</p>


<p>
${provider.description}
</p>


<h2>
Starting $${provider.price}
</h2>


<a class="btn" href="messages.html">
💬 Message Seller
</a>


</div>


`;


}
else{


profile.innerHTML =

"<h2>No provider selected</h2>";

}