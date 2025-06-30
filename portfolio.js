//LANDING SLIDER
// V A R I A B L E S
const slider = document.querySelector(".slider");
const matthew = document.querySelector(".name");
const title = document.querySelector(".title");

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
   
   //INITIAL AUTO SCROLL
   let auto = "on";
   console.log(auto);
   title.addEventListener("click", function () {
      auto = "off";
      console.log(auto);
   });

   if (auto === "on"){
      slider.animate(autoLeft, autoOptions);
      
      var autoLeft = [
      { transform: 'perspective(80vw) rotateX(-10deg) rotateY(-45deg)' },
      { transform: 'perspective(80vw) rotateX(-10deg) rotateY(0deg)' }
      ];

      var autoOptions = {
      duration: 700, // mseconds
      iterations: 1, // Repeat
      easing: 'cubic-bezier(.28,.19,.37,1.32)' // rate
      };

   };

   //if left button pressed
   sliderLeft.addEventListener("click", function () {
      
      slider.animate(transformationsLeft, timingOptionsLeft); //basically keyframes
         
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
   var transformationsLeft = [
      { transform: 'perspective(80vw) rotateX(-10deg) rotateY(-45deg)' },
      { transform: 'perspective(80vw) rotateX(-10deg) rotateY(0deg)' }
   ];

   var timingOptionsLeft = {
      duration: 700, // mseconds
      iterations: 1, // Repeat
      easing: 'cubic-bezier(.28,.19,.37,1.32)' // rate
   };

   //if right button pressed
   sliderRight.addEventListener("click", function () {
      
      slider.animate(transformationsRight, timingOptionsRight); //basically keyframes
         
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
   var transformationsRight = [
      { transform: 'perspective(80vw) rotateX(-10deg) rotateY(45deg)' },
      { transform: 'perspective(80vw) rotateX(-10deg) rotateY(0deg)' }
   ];

   const timingOptionsRight = {
      duration: 700, // mseconds
      iterations: 1, // Repeat
      easing: 'cubic-bezier(.28,.19,.37,1.32)' // rate
   };

   //if the slider is pressed
   slider.addEventListener("click", function() {

   });



//HOBBIES HEXAGON IMAGE APPEAR ON HOVER
let hexagonRunning = document.querySelector(".left");
let hexagonArt = document.querySelector(".middle");
let hexagonMath = document.querySelector(".right");

let hexagonTop = document.querySelector(".hexagon-top");
let runningImage = document.querySelector(".hobbies-running");
let artImage = document.querySelector(".hobbies-art");
let mathImage = document.querySelector(".hobbies-math");

hexagonTop.style.display = "none";
   
      var hexagonIn = [
      { transform: ' rotateY(-90deg)' },
      { transform: ' rotateY(0deg)' }
      ];
      var hexagonTime = {
      duration: 300, // mseconds
      iterations: 1, // Repeat
      easing: 'ease-out' // rate
      };

hexagonRunning.addEventListener("mouseover", function(){
   hexagonTop.animate(hexagonIn, hexagonTime);
   hexagonTop.style.display = "block";
   runningImage.style.display = "block";
});
hexagonRunning.addEventListener("mouseout", function(){
   hexagonTop.style.display = "none";
   runningImage.style.display = "none";
});

hexagonArt.addEventListener("mouseover", function(){
   hexagonTop.animate(hexagonIn, hexagonTime);
   hexagonTop.style.display = "block";
   artImage.style.display = "block";
});
hexagonArt.addEventListener("mouseout", function(){
   hexagonTop.style.display = "none";
   artImage.style.display = "none";
});

hexagonMath.addEventListener("mouseover", function(){
   hexagonTop.animate(hexagonIn, hexagonTime);
   hexagonTop.style.display = "block";
   mathImage.style.display = "block";
});
hexagonMath.addEventListener("mouseout", function(){
   hexagonTop.style.display = "none";
   mathImage.style.display = "none";
});