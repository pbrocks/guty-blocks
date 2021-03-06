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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello_world_editor_css__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello_world_editor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__hello_world_editor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello_world_view_scss__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hello_world_view_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__hello_world_view_scss__);



const {
    registerBlockType
} = wp.blocks;

registerBlockType('guty-blocks/hello-world', {
    title: 'Hello World!',
    icon: 'welcome-write-blog',
    category: 'common',

    attributes: {// Somewhat like setting initial state in a react app
    },

    // The editor "render" function
    edit(props) {
        const { className } = props;

        return wp.element.createElement(
            'div',
            { className: className },
            wp.element.createElement(
                'h1',
                null,
                'Hello World!'
            )
        );
    },

    // The save "render" function
    save(props) {
        const { className } = props;

        return wp.element.createElement(
            'div',
            { className: className },
            wp.element.createElement(
                'h1',
                null,
                'Hello World!'
            )
        );
    }

});

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/* .wp-block-guty-blocks-hello-world {
    background: cadetblue;
    color: white;
} */



/***/ }),

/***/ 13:
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (4:0)\nYou may need an appropriate loader to handle this file type.\n| \n| \n| .wp-block-guty-blocks-hello-world {\n|     background: tomato;\n|     color: white;");

/***/ })

/******/ });