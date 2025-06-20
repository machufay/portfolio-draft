const slider = document.querySelector(".slider");
const matthew = document.querySelector(".name");
const item = document.querySelector(".item");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");

let itemAngle = [0, 45, 90, 135, 180, 225, 270, 315];

var startAngle = 90;
var endAngle = startAngle + 45;
var position = 0;

slider.addEventListener("click", function () {
   
   slider.animate(transformations, timingOptions);
      
   itemAngle.forEach(function(angle, index, arr){
      if (angle >= 360){
         angle -=360;
      }
      arr[index] = angle + 45;
   });
      console.log(itemAngle);

   matthew.style.transform = 'rotateY(' + itemAngle[0] + 'deg)';
   item1.style.transform = 'rotateY(' + itemAngle[0] + 'deg) translateZ(30vw)';
   item2.style.transform = 'rotateY(' + itemAngle[1] + 'deg) translateZ(30vw)';
   item3.style.transform = 'rotateY(' + itemAngle[2] + 'deg) translateZ(30vw)';
   item4.style.transform = 'rotateY(' + itemAngle[3] + 'deg) translateZ(30vw)';
   item5.style.transform = 'rotateY(' + itemAngle[4] + 'deg) translateZ(30vw)';
   item6.style.transform = 'rotateY(' + itemAngle[5] + 'deg) translateZ(30vw)';
   item7.style.transform = 'rotateY(' + itemAngle[6] + 'deg) translateZ(30vw)';
   item8.style.transform = 'rotateY(' + itemAngle[7] + 'deg) translateZ(30vw)';

});

/*
   rotateY(calc( var(--position) * (360 / var(--quantity)) * 1deg))
    translateZ(30vw)//sets the radius of the circle
    rotateX(0deg); //tilts each item
*/
var transformations = [
    { transform: 'perspective(100vw) rotateX(-16deg) rotateY(-45deg)' },
    { transform: 'perspective(100vw) rotateX(-16deg) rotateY(0deg)' }
];

const timingOptions = {
    duration: 700, // mseconds
    iterations: 1, // Repeat
    easing: 'cubic-bezier(.12,-0.41,.64,1.56)' // rate
};

/*let rotatingAngle = 0;
function rotateSlider() {
  rotatingAngle += 1;
  slider.style.transform = "rotateY("+rotatingAngle+"deg) perspective(100vw) rotateX(-16deg)";

  if (rotatingAngle < 360) { // Stop condition
   setTimeout(rotateSlider, 10); // Call again after 10ms
  } else {
      if (rotatingAngle >= 360){ //if the angle exceeds 360, subtract 360 from it
         rotatingAngle -= 360;
      }
      return done;
  }
}

slider.addEventListener("click", function(){
   rotateSlider();
   if (rotatingAngle == 360){
      rotatingAngle = 0;
   }
});*/
