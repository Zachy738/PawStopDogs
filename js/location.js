const button =
document.getElementById("getLocation");



if(button){


button.onclick=function(){



if(!navigator.geolocation){

alert(
"Location is not supported"
);

return;

}




navigator.geolocation.getCurrentPosition(


function(position){


document.getElementById("latitude").value =
position.coords.latitude;



document.getElementById("longitude").value =
position.coords.longitude;



alert(
"Location saved!"
);



},



function(){


alert(
"You need to allow location access."
);



}



);



};


}