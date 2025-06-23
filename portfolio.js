// V A R I A B L E S
const slider = document.querySelector(".slider");
const matthew = document.querySelector(".name");

//ITEM variables
const item = document.querySelector(".item");
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
//BUTTON variables
   const sliderLeft = document.querySelector(".slider-left");
   const sliderRight = document.querySelector(".slider-right");

//ROTATING SLIDER CODE!!!
   let itemAngle = [0, 45, 90, 135, 180, 225, 270, 315]; //array stores item angles

   var startAngle = 90;
   var endAngle = startAngle + 45;
   var position = 0;
   
   //if right button pressed
   sliderRight.addEventListener("click", function () {
      
      slider.animate(transformationsRight, timingOptionsRight); //basically keyframes
         
      itemAngle.forEach(function(angle, index, arr){
         if (angle >= 360){ 
            angle -=360; //if angle exceeds 360, subtract 360
         }
         arr[index] = angle + 45; //add 45deg to each array item
      });
         console.log(itemAngle);
      //renders the final or resting position after rotation
      matthew.style.transform = 'rotateY(' + itemAngle[0] + 'deg)';
      item1.style.transform = 'rotateY(' + itemAngle[0] + 'deg) translateZ(20vw)';
      item2.style.transform = 'rotateY(' + itemAngle[1] + 'deg) translateZ(20vw)';
      item3.style.transform = 'rotateY(' + itemAngle[2] + 'deg) translateZ(20vw)';
      item4.style.transform = 'rotateY(' + itemAngle[3] + 'deg) translateZ(20vw)';
      item5.style.transform = 'rotateY(' + itemAngle[4] + 'deg) translateZ(20vw)';
      item6.style.transform = 'rotateY(' + itemAngle[5] + 'deg) translateZ(20vw)';
      item7.style.transform = 'rotateY(' + itemAngle[6] + 'deg) translateZ(20vw)';
      item8.style.transform = 'rotateY(' + itemAngle[7] + 'deg) translateZ(20vw)';

   });

   //parameters for animate function
   var transformationsRight = [
      { transform: 'perspective(100vw) rotateX(-14deg) rotateY(-45deg)' },
      { transform: 'perspective(100vw) rotateX(-14deg) rotateY(0deg)' }
   ];

   const timingOptionsRight = {
      duration: 700, // mseconds
      iterations: 1, // Repeat
      easing: 'cubic-bezier(.28,.19,.37,1.32)' // rate
   };

   //if left button pressed
   sliderLeft.addEventListener("click", function () {
      
      slider.animate(transformationsLeft, timingOptionsLeft); //basically keyframes
         
      itemAngle.forEach(function(angle, index, arr){
         if (angle >= 360){ 
            angle -=360; //if angle exceeds 360, subtract 360
         }
         arr[index] = angle - 45; //subtract 45deg from each array item
      });
         console.log(itemAngle);
      //renders the final or resting position after rotation
      matthew.style.transform = 'rotateY(' + itemAngle[0] + 'deg)';
      item1.style.transform = 'rotateY(' + itemAngle[0] + 'deg) translateZ(20vw)';
      item2.style.transform = 'rotateY(' + itemAngle[1] + 'deg) translateZ(20vw)';
      item3.style.transform = 'rotateY(' + itemAngle[2] + 'deg) translateZ(20vw)';
      item4.style.transform = 'rotateY(' + itemAngle[3] + 'deg) translateZ(20vw)';
      item5.style.transform = 'rotateY(' + itemAngle[4] + 'deg) translateZ(20vw)';
      item6.style.transform = 'rotateY(' + itemAngle[5] + 'deg) translateZ(20vw)';
      item7.style.transform = 'rotateY(' + itemAngle[6] + 'deg) translateZ(20vw)';
      item8.style.transform = 'rotateY(' + itemAngle[7] + 'deg) translateZ(20vw)';

   });

   //parameters for animate function
   var transformationsLeft = [
      { transform: 'perspective(100vw) rotateX(-14deg) rotateY(45deg)' },
      { transform: 'perspective(100vw) rotateX(-14deg) rotateY(0deg)' }
   ];

   const timingOptionsLeft = {
      duration: 700, // mseconds
      iterations: 1, // Repeat
      easing: 'cubic-bezier(.28,.19,.37,1.32)' // rate
   };

   //if the slider is pressed
   slider.addEventListener("click", function() {

   });
/* Old animation (DEFUNCT)
let rotatingAngle = 0;
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

