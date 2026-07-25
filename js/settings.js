let settings =
JSON.parse(
localStorage.getItem("settings")
)
||
{

dark:false,

sounds:true,

animations:true

};





const dark =
document.getElementById("darkMode");


const sounds =
document.getElementById("sounds");


const animations =
document.getElementById("animations");





dark.checked =
settings.dark;


sounds.checked =
settings.sounds;


animations.checked =
settings.animations;





function save(){


localStorage.setItem(

"settings",

JSON.stringify(settings)

);


}





dark.onchange=function(){


settings.dark =
dark.checked;


document.body.classList.toggle(

"dark",

settings.dark

);


save();


};






sounds.onchange=function(){


settings.sounds =
sounds.checked;


save();


};






animations.onchange=function(){


settings.animations =
animations.checked;


if(!settings.animations){

document.body.classList.add(
"no-animation"
);

}

else{

document.body.classList.remove(
"no-animation"
);

}


save();


};







document
.getElementById("resetData")
.onclick=function(){


let confirmReset =
confirm(
"Delete all PawStop data?"
);



if(confirmReset){


localStorage.clear();


alert(
"PawStop reset!"
);


location.reload();


}


};





if(settings.dark){

document.body.classList.add(
"dark"
);

}



if(!settings.animations){

document.body.classList.add(
"no-animation"
);

}