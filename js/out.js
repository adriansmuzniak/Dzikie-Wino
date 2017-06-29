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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./main.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
document.addEventListener("DOMContentLoaded", function () {});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "/*reset CSS*/\n\n* {\n  padding: 0;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n\n/*common styles*/\n\nbody {\n  background-color: white;\n  font-size: 36px;\n  font-family: 'Great Vibes', Arial, sans-serif cursive;\n  background-image: url(\"/images/inne/rose4.jpg\");\n  /*background-position: center;*/\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-attachment: fixed;\n\n}\n\n#main-container {\n  width: 960px;\n  /*height: 100vh; /*zakomentować*/*/\n  margin: 0 auto;\n  border-left: 3px double #ccc;\n  border-right: 3px double #ccc;\n  border-radius: 3%;\n  box-shadow: 0px 10px 30px #69333E;\n  background-color: floralwhite;\n}\n\n.main-width {\n  /*width: 100%;*/\n}\n\n.main-width::after {\n  clear: both;\n  content: \"\";\n  display: block;\n\n}\n\nnav {\n  width: 955px;\n  height: 145px;\n  margin: 0 auto;\n  align-items: center;\n  border-radius: 20px 20px 10px 10px;\n  /*border: 1px solid red;*/\n}\n\n.menu-left {\n  position: relative;\n  right: 15px;\n  padding-top: 20px;\n  padding-left: 18px;\n  /*padding-right: 15px;*/\n  float: left;\n  width: 42%;\n  height: 100px;\n  /*border: 1px solid black;*/\n  /*margin-left: 5px;*/\n  border-bottom: 3px double lightgrey;\n  border-radius: 25px 0px 0px 25px;\n  box-shadow: -5px 2px 15px #47000E;\n  background-color: floralwhite;\n}\n\n/*.menu-left::after{\n  display: block;\n  content: \"\";\n  color: green;\n}*/\n\n.menu-right {\n  position: relative;\n  left: 15px;\n  padding-top: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  float: right;\n  width: 42%;\n  height: 100px;\n  /*border: 1px solid black;*/\n  /*margin-right: 10px;*/\n  border-bottom: 3px double lightgrey;\n  border-radius: 0px 25px 25px 0px;\n  box-shadow: 5px 2px 15px #47000E;\n  background-color: floralwhite;\n}\n\n.nav-logo {\n  float: left;\n  width:16%;\n  /*height: 100px;*/\n  /*border: 1px solid yellow;*/\n  background-color: floralwhite;\n  text-align: center;\n  /*padding-right: 17px;*/\n  height: 140px;\n}\n\n#logo {\n  height: 170px;\n  width: 190px;\n  /*margin: 5px;*/\n  /*border: 1px solid red;*/\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 2%;\n  box-shadow: 0px 5px 10px #47000E;\n  transition: 0.2s;\n  transition-delay: 0.1s;\n  border: 1px solid black;\n  z-index: 1;\n}\n\n#logo:hover {\n  width:183px;\n  box-shadow: 0px 5px 20px #47000E;\n  border: 1px solid darkgoldenrod;\n}\n\n.menu-list li{\n  cursor: pointer;\n  font-family: 'Great Vibes', Arial;\n  width: 110px;\n  height: 45px;\n  font-size: 24px;\n  float: left;\n  list-style-type: none;\n  display: inline-block;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  margin-left: 6px;\n  margin-right: 6px;\n  padding: 3px;\n  padding-top: 7px;\n  text-align: center;\n  letter-spacing: 2px;\n  color: #47000E;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 3px 3px 10px #47000E;\n  border: 3px double saddlebrown;\n  background: rgba(255,255,255,1);\n  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(35%, rgba(246,246,246,1)), color-stop(100%, rgba(230,184,193,1)));\n  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6b8c1', GradientType=0 );\n  transition: 0.2s;\n}\n\n.menu-list a:link {\n  text-decoration: none;\n  color: darkgoldenrod;\n}\n\n.menu-list a:visited {\n  text-decoration: none;\n  color: #47000E;\n}\n\n.menu-list li:hover{\n  box-shadow: 7px 7px 10px #47000E;\n  /*width: 115px;*/\n  /*height: 50px;*/\n  transform: translateX(-3%);\n  color: darkgoldenrod;\n  border-radius: 13px 13px 13px 13px;\n  border: 3px double darkgoldenrod;\n}\n\n.menu-list li:active{\n  color: darkgoldenrod;\n  /*width: 105px;*/\n  /*height: 40px;*/\n  top: 3px;\n  left: 5px;\n  position: relative;\n  box-shadow: 2px 2px 5px #47000E;\n  text-decoration: none;\n}\n\n\n#slider {\n  width: 700px;\n  height: 370px;\n  overflow: hidden;\n  position: relative;\n  top: -17px;\n  z-index: 0;\n  transition: 0.5s;\n  box-shadow: 10px 10px 20px #47000E;\n  border: 10px double wheat;\n}\n\n#slider:hover {\n  transform: scale(1.1);\n  top: -10px;\n  transition-delay: 0.4s ease;\n  box-shadow: 10px 10px 40px #47000E;\n  border: 3px double wheat;\n  /*padding: 3px;*/\n}\n\n#slider .slides {\n  display: block;\n  width: 6000px;\n  height: 370px;\n  margin: 0;\n  padding: 0;\n}\n\n#slider .slide {\n  text-align: center;\n  float: left;\n  list-style-type: none;\n  width: 700px;\n  height: 370px;\n  /*border: 10px solid wheat;*/\n  padding: 1px;\n\n}\n\n#slider img{\n  background-position: center;\n  text-align: center;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transition: 1s;\n  opacity: 1;\n  /*transform: scale(1);*/\n}\n\n#slider img:hover{\n\n  cursor: pointer;\n  transform: scale(1.2);\n  opacity: 0.9;\n  position: relative;\n}\n\n\n\n/*hovery dla galerii*/\n\n.div-color1:hover, .div-color3:hover {\n  /*transform: skewX(-0deg);*/\n  transform: scale(1.5);\n  width: 26%;\n  top: 0px;\n  border-radius: 1%;\n  box-shadow: 6px 6px 10px #47000E;\n  /*z-index: 3:*/\n  border: 1px double wheat;\n  background-color: white;\n  z-index: 1;\n  cursor: pointer;\n  animation: slides-down 0.4s alternate ease-in;\n}\n\n.div-color2:hover, .div-color4:hover {\n  /*transform: skewX(-0deg);*/\n  transform: scale(1.5);\n  width: 26%;\n  top: -30px;\n  border-radius: 1%;\n  box-shadow: 10px 10px 30px #47000E;\n  border: 1px double wheat;\n  background-color: white;\n  z-index: 1;\n  cursor: pointer;\n  /*animation: slides-up 0.6s alternate ease;*/\n}\n\n@keyframes slides-down {\n\n  0% {transform: skewX(-7deg);}\n  100% {transform: skewX(-7deg);}\n\n}\n\n@keyframes slides-up {\n\n  0% {transform: skewX(-7deg);}\n  100% {transform: skewX(-7deg);}\n\n}\n/*--------------------------------------------*/\n\n.div-color1 {\n  /*background-color: red;*/\n  width: 24%;\n  height: 170px;\n  margin-top: 50px;\n  margin-left: -2px;\n  margin-right: -2px;\n  position: relative;\n  top: -30px;\n  float: left;\n  transform: skewX(-7deg);\n  margin-bottom: 15px;\n  /*box-shadow: 10px 10px 30px #47000E;*/\n  transition: 0.3s;\n  /*z-index: 1;*/\n\n}\n\n\n.div-color2 {\n  /*background-color: green;*/\n  width: 24%;\n  height: 170px;\n  margin-top: 50px;\n  position: relative;\n  top: 0px;\n  margin-left: -2px;\n  margin-right: -2px;\n  float: left;\n  transform: skewX(-7deg);\n  margin-bottom: 15px;\n  /*box-shadow: 6px 6px 10px #47000E;*/\n  transition: 0.3s;\n  /*z-index: 0;*/\n}\n.div-color3 {\n  /*background-color: blue;*/\n  width: 24%;\n  height: 170px;\n  margin-top: 50px;\n  position: relative;\n  margin-left: -2px;\n  margin-right: -2px;\n  float: left;\n  transform: skewX(-7deg);\n  margin-bottom: 15px;\n  /*box-shadow: 10px 10px 30px #47000E;*/\n  transition: 0.3s;\n  top: -30px;\n  /*z-index: 1;*/\n\n}\n.div-color4 {\n  /*background-color: yellow;*/\n  width: 24%;\n  height: 170px;\n  margin-top: 50px;\n  position: relative;\n  margin-left: -2px;\n  margin-right: -2px;\n  float: left;\n  transform: skewX(-7deg);\n  margin-bottom: 15px;\n  /*box-shadow: 6px 6px 10px #47000E;*/\n  transition: 0.3s;\n  top: 0px;\n  /*z-index: 0;*/\n\n}\n\n#welcome{\n  margin-top: 30px;\n}\n\n.background {\n  float: left;\n  width: 103%;\n  left: -15px;\n  position: relative;\n  /*height: 300px;*/\n  border-top: 3px double lightgrey;\n  border-bottom: 3px double lightgrey;\n  border-radius: 25px 25px 25px 25px;\n  box-shadow: 0px 2px 30px #47000E;\n  background-color: floralwhite;\n  text-align: center;\n  background-image: url(\"/images/inne/bez4.jpg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.section-button {\n  text-align: center;\n  height: 100px;\n  width: 300px;\n  display: inline-block;\n  border: 1px solid black;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  padding: 7px;\n  color: #47000E;\n  border-radius: 10px 10px 10px 10px;\n  box-shadow: 3px 3px 10px #47000E;\n  border: 3px double saddlebrown;\n  background: rgba(255,255,255,1);\n  background: -moz-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(255,255,255,1)), color-stop(35%, rgba(246,246,246,1)), color-stop(100%, rgba(230,184,193,1)));\n  background: -webkit-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: -o-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: -ms-linear-gradient(top, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  background: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(246,246,246,1) 35%, rgba(230,184,193,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#e6b8c1', GradientType=0 );\n\n}\n\n\n\n.span-headers {\n  font-family: 'Great Vibes', Arial, sans-serif;\n  font-size: 40px;\n  display: inline-block;\n  word-spacing: 5px;\n  letter-spacing: 3px;\n}\n\n.span-subheaders {\n  font-family: 'Great Vibes', Arial, sans-serif;\n  font-size: 24px;\n  display: inline-block;\n  position: relative;\n  top: -15px;\n  letter-spacing: 2px;\n}\n\n#welcome .span-text {\n  color: white;\n  font-family:  'Great Vibes', Arial, sans-serif;\n  width: 900px;\n  display: block;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  font-size: 34px;\n\n\n}\n.span-text .Socha {\n  font-size: 42px;\n}\n\n\n.gallery-section {\n  height: 620px;\n  left: 25px;\n  position: relative;\n}\n\n.gallery-section img {\n  position: relative;\n  /*top: 50%;\n  left: 50%;*/\n  /*transform: translate(-50%, -50%);*/\n  /*transform: skewX(7deg);*/\n  width: 100%;\n  height: 100%;\n  /*left: -1px;*/\n  /*top: 20px;*/\n  box-shadow: 6px 6px 40px #47000E;\n  transition: 0.3s;\n  opacity: 0.9;\n}\n\n.gallery-section img:hover {\n  box-shadow: 0px 0px 0px #fff;\n  opacity: 1;\n  border-radius: 3%;\n\n}\n\n#images-show {\n  margin-top: 30px;\n  margin-bottom: 15px;\n  /*height: 360px;*/\n  text-align: center;\n  /*padding-left: 20px;*/\n}\n\n#images-show .section-button {\n  height: 50px;\n  width:  240px;\n  padding: 10px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  position: relative;\n  left: -25px;\n}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);