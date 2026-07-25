const container =
document.querySelector(".listing-grid");



let providers =
JSON.parse(
localStorage.getItem("providers")
) || [];





function displayListings(){


container.innerHTML="";



if(providers.length === 0){


container.innerHTML = `

<h2>
No providers yet.
Create the first listing!
</h2>

`;

return;


}



providers.forEach(provider=>{


container.innerHTML += `


<div class="listing-card">


<div class="pet-photo">
🐶
</div>


<h2>
${provider.name}
</h2>


<p>
⭐ ${provider.rating}
</p>


<p>
📍 ${provider.location}
</p>


<p>
${provider.service}
</p>


<h3>
Starting $${provider.price}
</h3>



<button 
class="btn"
onclick="viewProvider(${provider.id})">

View Profile

</button>


</div>


`;


});


}




function viewProvider(id){


let provider =
providers.find(
p => p.id == id
);



localStorage.setItem(
"selectedProvider",
JSON.stringify(provider)
);



window.location.href="listing.html";


}





displayListings();