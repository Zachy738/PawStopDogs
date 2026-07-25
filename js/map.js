let map;



const button =
document.getElementById(
"locationButton"
);




button.onclick=function(){


navigator.geolocation.getCurrentPosition(


function(position){


let userLat =
position.coords.latitude;



let userLng =
position.coords.longitude;




loadMap(
userLat,
userLng
);



},



function(){


alert(
"Please allow location access."
);


}



);



};






function loadMap(lat,lng){



map =
L.map("map")
.setView(
[lat,lng],
13
);




L.tileLayer(

"https://tile.openstreetmap.org/{z}/{x}/{y}.png"

)

.addTo(map);






L.marker(
[lat,lng]
)

.addTo(map)

.bindPopup(
"You are here 📍"
);






let providers =
JSON.parse(
localStorage.getItem("providers")
) || [];





providers.forEach(provider=>{


if(
provider.latitude &&
provider.longitude
){



let marker =
L.marker([

provider.latitude,

provider.longitude

])

.addTo(map);





marker.bindPopup(`


<h3>
${provider.name}
</h3>


<p>
${provider.service}
</p>


<p>
⭐ ${provider.rating}
</p>


<p>
Starting $${provider.price}
</p>


<button onclick="messageSeller(${provider.id})">

💬 Message Seller

</button>


`);




}



});



button.style.display="none";



}





function messageSeller(id){



let providers =
JSON.parse(
localStorage.getItem("providers")
);



let provider =
providers.find(
p=>p.id == id
);




localStorage.setItem(

"chatProvider",

JSON.stringify(provider)

);




window.location =
"messages.html";



}