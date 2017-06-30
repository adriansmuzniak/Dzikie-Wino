require("../css/main.css");
document.addEventListener("DOMContentLoaded", function(){

var span = $(".span-headers");
console.log();

$(".background").hover(
  function(){
    $(".section-button").stop(true, true).fadeOut(500, "swing" );
    $(".background").stop(true, true).animate({"opacity": "0.9", "height": "-=150px"},700);
    // $(".span-text").stop().fadeOut(1000);
  },
  function(){
    // $(".span-text").stop().fadeIn(1000);
    $(".background").stop(true, true).animate({"opacity": "1", "height": "+=150px"},300);
    $(".section-button").stop(true, true).fadeIn(700, "swing");

  }
)

$("#slider").hover(
  function(){
    $("#logo").stop(true,true).animate({"height": "155px", "width": "170px","opacity": "0.2"},1);
    $("#slider").stop(true,true).animate({"z-index": "+=1"},200);
  },
  function(){
    $("#logo").stop(true,true).animate({"height": "180px", "width": "200px", "opacity": "1" },1);
      $("#slider").stop(true,true).animate({"z-index": "-=1"},1);
  }
)

// ----------------------------------------------------------------
$(function(){

// configuration
 var width = 700; //szerokość
 var animationSpeed = 500; //szybkość animacji - 1s
 var pause = 3000; //szybkość pętli
 var currentSlide = 1;

//cacheDOM
 var $slider = $("#slider"); //div w którym jest slider
 var $slideContainer = $slider.find(".slides"); // ul
 var $slides = $slideContainer.find(".slide"); // li

 var interval; // interval na zewnątrz - scope

 function startSlider(){
   interval = setInterval(function(){
     $slideContainer.animate({"margin-left": "-="+ width},  animationSpeed, function() {
       currentSlide++;
       if (currentSlide === $slides.length) {
         currentSlide = 1;
         $slideContainer.css("margin-left", 0);
       }
     });
   }, pause);
 }

//pauza po najechaniu
 function pauseSlider(){
  clearInterval(interval);
  }

//start po najechaniu
  startSlider(); //wywołanie funkcji
  $slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider);

  })
});
