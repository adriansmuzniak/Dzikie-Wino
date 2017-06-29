require("../css/main.css");
document.addEventListener("DOMContentLoaded", function(){

var span = $(".span-headers");
console.log();

$(".background").hover(
  function(){
    $(".section-button").stop(true, true).fadeOut(700, "swing" );
    $(".background").stop(true, true).animate({"opacity": "0.9", "height": "-=150px"},700);
    // $(".span-text").stop().animate({"font-size": "+=3px"}, "slow");
  },
  function(){
        // $(".span-text").stop().animate({"font-size": "-=3px"}, "slow");
    // $(".span-text").stop().slideDown("slow");
    $(".background").stop(true, true).animate({"opacity": "1", "height": "+=150px"},300);
    $(".section-button").stop(true, true).fadeIn(700, "swing");

  }
)

$(function(){

// configuration
 var width = 700;
 var animationSpeed = 1000;
 var pause = 3000;
 var currentSlide = 1;

//cacheDOM
 var $slider = $("#slider");
 var $slideContainer = $slider.find(".slides");
 var $slides = $slideContainer.find(".slide");

 var interval;

 function startSlider(){
   interval = setInterval(function(){
     $slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function() {
       currentSlide++;
       if (currentSlide === $slides.length) {
         currentSlide = 1;
         $slideContainer.css("margin-left", 0);
       }
     });
   }, pause);
 }

 function pauseSlider(){
  clearInterval(interval);
  }

  startSlider();
  $slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider);

  })
});
