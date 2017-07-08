/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require("../css/main.css");
$(document).ready(function () {
  // action after click

  //-----------------Button prev-------------------------------
  $(".slider-prev").hover(function () {
    $(this).finish().animate({ "left": "-=10px" }, 100);
  }, function () {
    $(this).finish().animate({ "left": "+=10px" }, 100);
  }

  // ---------------Button next------------------------------------------
  );$(".slider-next").hover(function () {
    $(this).animate({ "left": "+=10px" }, 100);
  }, function () {
    $(this).animate({ "left": "-=10px" }, 100);
  }
  // ----------------------------LOGO---------------------------------------------------
  );$("#slider").hover(function () {
    $("#logo").stop(true, true).animate({ "height": "155px", "width": "170px", "opacity": "0.2" }, 1);
    $("#slider").stop(true, true).animate({ "z-index": "+=1" }, 200);
  }, function () {
    $("#logo").stop(true, true).animate({ "height": "180px", "width": "200px", "opacity": "1" }, 1);
    $("#slider").stop(true, true).animate({ "z-index": "-=1" }, 1);
  }

  // ----------------------------------------------------------------
  //
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

  // -----------------------test------------------------------
  //

  );$(function () {
    $(".slides img:first").addClass("active");

    var change = function change() {
      //change class active
      //  alert("sample")
      var current = $(".slides img.active");
      var next = current.next();

      if (!next.length) {
        next = $(".slides img:first");
        next.addClass('active');

        current.animate({ opacity: 0.0 }, 300, function () {
          current.removeClass("active");
          current.css({ opacity: 1.0 });
        });
      } else {
        next.css({ opacity: 0.0 }).addClass("active").animate({ opacity: 1.0 }, 300, function () {
          current.removeClass("active");
        });
        // next.addClass('active');
        // current.removeClass("active");
      }
    };
    setInterval(change, 3000);
  });

  $(".slider-next").on("click", function () {
    var cos = $(".slides").find("img");
    console.log(cos.length);
    var currentImage = $(".active");
    var nextImage = currentImage.next();
    if (nextImage.length) {
      currentImage.removeClass("active").css('z-index', -10);
      nextImage.addClass('active').css('z-index', 10);
    }
  });

  $(".slider-prev").on("click", function () {
    var currentImage = $(".active");
    var prevImage = currentImage.prev();
    if (prevImage.length) {
      currentImage.removeClass("active").css('z-index', -10);
      prevImage.addClass('active').css('z-index', 10);
    }
  }

  // -------------------------------------------------------------------
  // logo - fading, resizing

  );var span = $(".span-headers");
  console.log();

  $(".background").hover(function () {
    // $(".section-button").stop(true, true).fadeOut(500, "swing" );
    $(".span-text").fadeOut(100);
    $(".background").animate({ "opacity": "0.9", "height": "-=225px", "width": "-=450px" }, 1000).animate({ "position": "relative", "left": "22%" }, 500);
  }, function () {
    $(".span-text").fadeIn(4000);
    $(".background").animate({ "position": "relative", "left": "-1%" }, 500).animate({ "opacity": "1", "height": "+=225px", "width": "+=450px" }, 300);

    // $(".section-button").stop(true, true).fadeIn(700, "swing");
  });
});

/***/ })
/******/ ]);