// PawStop Effects


// Click sound

const clickSound = new Audio(
"https://www.myinstants.com/media/sounds/click.mp3"
);



document.addEventListener(
"click",
function(e){


let button =
e.target.closest(
".btn, button, a"
);



if(button){


clickSound.currentTime=0;

clickSound.play()
.catch(()=>{});



// Ripple effect


let ripple =
document.createElement("span");


ripple.className="ripple";


let rect =
button.getBoundingClientRect();



ripple.style.width =
ripple.style.height =
Math.max(rect.width,rect.height)+"px";


ripple.style.left =
(e.clientX-rect.left-ripple.offsetWidth/2)
+"px";


ripple.style.top =
(e.clientY-rect.top-ripple.offsetHeight/2)
+"px";



button.appendChild(ripple);



setTimeout(()=>{

ripple.remove();

},500);



}


});