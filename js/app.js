// require("../css/main.css");
$(document).ready(function(){
// action after click
//-----------------Slider Button prev animation---------------------------
$(".slider-prev").hover(
  function(){
    $(this).finish().animate({"left": "-=10px"},100);
  },
  function(){
    $(this).finish().animate({"left": "+=10px"},100);
  }
)
// ---------------Slider Button next animation----------------------------
$(".slider-next").hover(
  function(){
    $(this).finish().animate({"left": "+=10px",},100);
  },
  function(){
    $(this).finish().animate({"left": "-=10px",},100);
  }
)
// ----------------------------LOGO------------------------------------
$("#slider").hover(
  function(){
    $(".slider-next").finish().animate({"left": "+=15px","opacity": "0.3"},400);
    $(".slider-prev").finish().animate({"left": "-=15px","opacity": "0.3"},400);
    $("#logo").stop(true,true).animate({"height": "155px", "width": "170px","opacity": "0.2"},1);
    $("#slider").stop(true,true).animate({"z-index": "+=1"},200);
  },
  function(){
    $(".slider-next").finish().animate({"left": "-=15px","opacity": "1"},200);
    $(".slider-prev").finish().animate({"left": "+=15px","opacity": "1"},200);
    $("#logo").stop(true,true).animate({"height": "180px", "width": "200px", "opacity": "1" },1);
      $("#slider").stop(true,true).animate({"z-index": "-=1"},1);
  }
)
// ----------------------------------------------------------------
// $(function(){
// // configuration
//  var width = 700; //szerokość
//  var animationSpeed = 500; //szybkość animacji - 1s
//  var pause = 3000; //szybkość pętli
//  var currentSlide = 1;
//
// //cacheDOM
//  var $slider = $("#slider"); //div w którym jest slider
//  var $slideContainer = $slider.find(".slides"); // ul
//  var $slides = $slideContainer.find(".slide"); // li
//
//  var interval; // interval na zewnątrz - scope
//
//  function startSlider(){
//    interval = setInterval(function(){
//      $slideContainer.animate({"margin-left": "-="+ width},  animationSpeed, function() {
//        currentSlide++;
//        if (currentSlide === $slides.length) {
//          currentSlide = 1;
//          $slideContainer.css("margin-left", 0);
//        }
//      });
//    }, pause);
//  }
//
// //pauza po najechaniu
//  function pauseSlider(){
//   clearInterval(interval);
//   }
//
// //start po najechaniu
//   startSlider(); //wywołanie funkcji
//   $slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider);
// })

// -----------------------Slider carousel 2------------------------------
 $(function(){
   $(".slides img:first").addClass("active");

   var change = function(){
     //change class active
    //  alert("sample")
    var current = $(".slides img.active");
    var next = current.next();

    if(!next.length){
      next = $(".slides img:first");
      next.addClass('active');
      current.animate({opacity: 0.0}, 300, function(){
        current.removeClass("active");
        current.css({opacity: 1.0})
      })
    }else{
      next.css({opacity: 0.0})
      .addClass("active")
      .animate({scale: 1.3})
      .animate({opacity: 1.0}, 300, function(){
        current.removeClass("active");
      });
      // next.addClass('active');
      // current.removeClass("active");
      }
    }
    setInterval(change, 3000);
 })
// -------------------Slider prev,next buttons action------------

$(".slider-next").on("click", function(){
  var currentImage = $(".active");
  var nextImage = currentImage.next();

  if(nextImage.length){
    currentImage.removeClass("active").css('z-index', -10);
    nextImage.addClass('active').css('z-index', 10);
  }
})

$(".slider-prev").on("click", function(){
  var currentImage = $(".active");
  var prevImage = currentImage.prev();

  if(prevImage.length){
    currentImage.removeClass("active").css('z-index', -10);
    prevImage.addClass('active').css('z-index', 10);
  }
})
// -------------------Virginia Creeper button resizing-------------------
$(".background").hover(
  function(){
      scrollToAnchor('.background');
      $(".background").finish(true,true).animate({"width": "103%", "left": "-15px", "height": "375px"}, 400, function(){
      $(".span-text").fadeIn(400).css("display", "in-block");
    },);
  },
  function(){
    $("body").animate({"opacity": "1"})
    $(".span-text").finish(true,true).fadeOut(200, function(){
      $(".background").animate({"width": "50%", "left": "26%", "height": "150px"}, 400);
    })
  })
// ----------------------Virginia Creeper button scroll to---------------
function scrollToAnchor(){
    var sectionPosition = $(".background");
    $('html,body').animate({scrollTop: sectionPosition.offset().top},1000);
}

// -------------------lightbox creation Window-----------------
var imagesLibrary = ["images/slub/wiazanka4.jpg","images/slub/auto1.jpg","images/slub/kosciol2.jpg","images/slub/love1.jpg","images/slub/kosciol10.jpg","images/slub/auto2.jpg","images/slub/kosciol3.jpg","images/slub/sala4.jpg","images/slub/wiazanka2.jpg","images/komunia/komunia2.jpg","images/slub/wiazanka3.jpg","images/slub/sloiki1.jpg","images/slub/kosciol5.jpg","images/slub/kosciol13.jpg","images/komunia/bzy.jpg","images/komunia/komunia4.jpg","images/aranzacja/aranzacja1.jpg","images/aranzacja/aranzacja2.jpg","images/aranzacja/aranzacja3.jpg","images/aranzacja/aranzacja4.jpg","images/aranzacja/aranzacja5.jpg","images/aranzacja/aranzacja6.jpg","images/aranzacja/aranzacja7.jpg","images/aranzacja/aranzacja9.jpg"];

var images = $(".gallery-section").find("img");
var lightbox = $("#lightbox");
var closeButton = $("#closeButton");
var nextButton = $(".nextButton");
var prevButton = $(".prevButton");

images.on("click", function(){
  var indexOfClicked = images.index(this);
  var imgUrl = $(event.target).attr("src")
  lightbox.css("visibility", "visible");
  lightbox.css("background-image", "url("+imgUrl+")");
  lightbox.css({"background-size": "100% 100%"});
  $("body").prepend('<div id="cover">&nbsp;</div>');

  closeButton.on("click", function(){
    $("#cover").remove();
    lightbox.css("visibility", "hidden")
  })

  var counter = indexOfClicked;

  nextButton.on("click",function(){
    lightbox.stop().fadeOut(100, function(){
      lightbox.css("background-image", "url("+imagesLibrary[counter]+")")
      lightbox.fadeIn(300);
    })
    counter++;
    if (counter>=imagesLibrary.length) {
      counter = 0;
    }
  })

  prevButton.on("click",function(){
    lightbox.stop().fadeOut(100, function(){
      lightbox.css("background-image", "url("+imagesLibrary[counter]+")")
      lightbox.fadeIn(300);
    })
    counter--;
    if (counter==-1) {
      counter = imagesLibrary.length-1;
    }
  })
  $("#cover").on("click", function(){
    $("#cover").remove();
    lightbox.css("visibility", "hidden")
  })
});

// ---------------------Div Cover on click-----------------------


// ------------------Next/Prev lightbox button fading--------------------
$("#lightbox").hover(
  function(){
    $(".prevButton, .nextButton").stop().fadeIn(200);
  },
  function(){
    $(".prevButton, .nextButton").stop().fadeOut(200);
  })
// ----------------------------------------------------------------------

  });
