/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    font-family: Helvetica, sans-serif;\\n    display: flex;\\n    margin: 0;\\n    background-color: rgb(2, 10, 31);\\n    justify-content: center;\\n}\\n\\nh2 {\\n    color: white;\\n}\\n\\n#container {\\n    display: flex;\\n    justify-content: space-between;\\n    width: 60%;\\n    margin-top: 100px;\\n}\\n\\n#player-gameboard, #computer-gameboard {\\n    display: grid;\\n    grid-template-columns: repeat(10, auto);\\n    width: fit-content;\\n    border: 3px solid white;\\n}\\n\\n.cell {\\n    display: flex;\\n    background-color: rgb(43, 152, 241);\\n    border: 1px solid rgb(110, 184, 245);\\n    height: 35px;\\n    width: 35px;\\n    align-items: center;\\n    justify-content: center;\\n    font-size: large;\\n}\\n\\n.ship-cell {\\n    background-color: rgb(27, 28, 36);\\n}\\n\\n.computer-cell:hover {\\n    cursor: pointer;\\n}\\n\\n.missed-cell {\\n    background-color: rgb(189, 219, 243);\\n    color: rgb(27, 28, 36);\\n}\\n\\n.hit-cell {\\n    background-color: rgb(27, 28, 36);\\n    color: rgb(189, 219, 243);\\n}\\n\\n.gameboard-container {\\n    display: flex;\\n    gap: 5px;\\n}\\n\\n.cols {\\n    color: white;\\n    display: grid;\\n    grid-template-columns: repeat(10, auto);\\n    text-align: center;\\n}\\n\\n.rows {\\n    color: white;\\n    display: grid;\\n    grid-template-rows: repeat(10, auto);\\n    align-items: end;\\n    text-align: right;\\n}\\n\\n.current-gb {\\n    opacity: 0.4;\\n}\\n\\n\\n.modal {\\n    display: none;\\n    position: fixed;\\n    z-index: 1;\\n    top: 0;\\n    right: 0;\\n    bottom: 0;\\n    left: 0;\\n    overflow: auto;\\n    background-color: rgba(0, 0, 0, 0.5);\\n}\\n\\n.modal-box {\\n    text-align: center;\\n    display: flex;\\n    flex-direction: column;\\n    background-color: white;\\n    padding: 40px 80px;\\n    gap: 20px;\\n    margin: auto;\\n}\\n\\n#end-message {\\n    font-size: xx-large;\\n    color: rgb(2, 10, 31);\\n}\\n\\n#ok-button {\\n    font-family: inherit;\\n    font-size: medium;\\n    background-color: rgb(43, 152, 241);\\n    border: none;\\n    padding: 10px;\\n}\\n\\n#ok-button:hover {\\n    cursor: pointer;\\n    background-color: rgb(33, 114, 180);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const playerModule = __webpack_require__(/*! ./player */ \"./src/player.js\")\nconst createPlayer = playerModule.playerFactory\n\nfunction game () {\n    \n    const user = createPlayer('Player')\n    const computer = createPlayer('Computer', true)\n    const players = [user, computer]\n\n    players.forEach(p => displayGameboard(p))\n    players.forEach(p => styleCells(p))\n\n    let currentPlayer = user\n\n    const computerGb = document.querySelector('#computer-gameboard')\n    const computerCells = [...computerGb.childNodes]\n    const userGb = document.querySelector('#player-gameboard')\n\n    computerCells.forEach(c => c.addEventListener('click', (e) => {\n        if(currentPlayer === user) {\n            userTurn(e)\n        }\n    }))\n    \n    function userTurn(e) {\n        const cellId = e.target.getAttribute('id')\n        const splitId = cellId.split('-')\n        const pos = splitId[1]\n        try {\n            const hit = user.attack(computer, pos)\n            styleCells(computer)\n            if(!hit) {\n                setCurrentPlayer(computer)\n                computerTurn()\n            } else {\n                if (computer.gameboard.allSunk()) {\n                    endGame(user)\n                }\n            }\n        } catch (error) {\n            alert(error)\n        }\n        return\n    }\n\n    function computerTurn() {\n        sleep(750).then(() => {\n            try {\n                const hit = computer.attack(user)\n                styleCells(user)\n                if (hit) {\n                    if(user.gameboard.allSunk()) {\n                        endGame(computer)\n                    }\n                    return computerTurn()\n                } else {\n                    setCurrentPlayer(user)\n                }\n            } catch (error) {\n                return computerTurn()\n            }\n        })\n        return    \n    }\n\n    function setCurrentPlayer(player) {\n        currentPlayer = player\n        currentGameboard(currentPlayer, players)\n    }\n\n    function currentGameboard(currentPlayer, players) {\n        const opponent = players.find(p => p !== currentPlayer)\n        if(opponent.isComputer) {\n            computerGb.classList.remove('current-gb')\n            userGb.classList.add('current-gb')\n        } else {\n            userGb.classList.remove('current-gb')\n            computerGb.classList.add('current-gb')\n        }\n    }\n\n}\n\nfunction sleep(ms) {\n    return new Promise((resolve) => {\n        __webpack_require__.g.setTimeout(() => resolve(), ms);\n    });\n}\n\nfunction displayGameboard(player) {\n    player.isComputer ? player = 'computer' : player = 'player'\n\n    const gameboard = document.querySelector('#' + player + '-gameboard')\n    let colIndex = 0\n    let rowIndex = 1\n\n    for(let i = 0; i < 100; i++) {\n        const cell = document.createElement('div')\n        const cellId = String.fromCharCode(65 + colIndex) + rowIndex\n        cell.setAttribute('id', player + '-' + cellId)\n        cell.setAttribute('class', 'cell')\n        if(player === 'computer') {\n            cell.classList.add('computer-cell')\n        }\n        gameboard.appendChild(cell)\n\n        rowIndex++\n        if(rowIndex > 10) {\n            colIndex++\n            rowIndex = 1\n        }\n    }\n}\n\nfunction styleCells(player) {\n    let playerType\n    player.isComputer ? playerType = 'computer' : playerType = 'player'\n\n    const playerMatrix = player.gameboard.matrix\n    let letters = Object.keys(playerMatrix)\n\n    for(let letter of letters) {\n        const nums = Object.keys(playerMatrix[letter])\n        for(let num of nums) {\n            const coord = letter + num\n            const c = document.querySelector('#' + playerType + '-' + coord)\n\n            switch(playerMatrix[letter][num]) {\n                case 'ship':\n                    if(!player.isComputer) {\n                        c.classList.add('ship-cell')\n                    }\n                    break;\n                case 'missed':\n                    c.classList.add('missed-cell')\n                    c.textContent = '✗'\n                    break;\n                case 'ship-hit':\n                    if(!player.isComputer) {\n                        c.classList.replace('ship-cell', 'hit-cell')\n                    } else {\n                        c.classList.add('hit-cell')\n                    }\n                    c.textContent = '✗'\n                    break;\n            }\n        }\n    }\n}\n\nfunction endGame(winner) {\n    const modal = document.querySelector('.modal')\n    modal.style.display = 'flex'\n\n    const message = document.querySelector('#end-message')\n\n    const newGameButton = document.querySelector('#ok-button')\n    newGameButton.addEventListener('click', () => {\n        modal.style.display = 'none'\n        location.reload()\n    })\n\n    if(!winner.isComputer) {\n        message.textContent = 'You Win!'\n    } else {\n        message.textContent = 'Game Over!'\n    }\n}\n\nmodule.exports = {\n    game\n}\n\n//# sourceURL=webpack://battleship/./src/game.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const shipModule = __webpack_require__(/*! ./ship */ \"./src/ship.js\")\nconst ship = shipModule.shipFactory\n\nfunction gameboardFactory () {\n    const sides = 10\n    const size = sides**2\n    const allShips = []\n\n    let matrix = {}\n    for (let i = 0; i < sides; i++) {\n        const letter = String.fromCharCode(65 + i) // Convert number of sides to uppercase letters\n        matrix[letter] = {}\n\n        for (let j = 1; j <= sides; j++) {\n            matrix[letter][j] = 'empty'\n        }\n    }\n\n    function initializeShips() {\n        createShips(1, 4)\n        createShips(2, 3)\n        createShips(3, 2)\n        createShips(4, 1)\n    }\n\n    function createShips(len, q) {\n        for(let i = 0; i < q; i++) {\n            const newShip = ship(len)\n            addShip(newShip) ? addShip(newShip) : i-- \n        }\n    }\n\n    function addShip(ship) {\n        let splitPosition\n\n        if (validateMatrixPositions(ship) && validateShipPositions(ship)) {\n            for (p of ship.allPositions) {\n                splitPosition = ship.splitPos(p)\n                const shipLetter = splitPosition[0]\n                const shipNumber = splitPosition[1]\n                matrix[shipLetter][shipNumber] = 'ship'\n            }\n        \n            allShips.push(ship)\n            return true\n        }\n        return false\n    }\n\n    function validateShipPositions(ship) {\n        for(p of ship.allPositions) {\n            const splitPosition = ship.splitPos(p)\n            if(matrix[splitPosition[0]][splitPosition[1]] !== 'empty') {\n                return false\n            }\n        }\n        return true\n    }\n\n    function validateMatrixPositions(ship) {\n        for(p of ship.allPositions) {\n            const splitPosition = ship.splitPos(p)\n            if(!matrix[splitPosition[0]]) {\n                return false\n            }\n        }\n        return true\n    }\n    \n    function receiveAttack(pos) {\n        const coord = pos.match(/[a-zA-Z]+|[0-9]+/g)\n\n        if (matrix[coord[0]][coord[1]] === 'ship') {\n            for (s of allShips) {\n                if (s.allPositions.includes(pos)) {\n                    s.hit(pos)\n                    matrix[coord[0]][coord[1]] = 'ship-hit'\n                    return true\n                }\n            }\n        } else {\n            matrix[coord[0]][coord[1]] = 'missed'\n            return false\n        }\n    }\n    \n    function allSunk() {\n        const sunkShips = []\n        for (s of allShips) {\n            if (s.hitPositions.length === s.allPositions.length) {\n                sunkShips.push('sunk-ship')\n            }\n        }\n        return sunkShips.length === allShips.length\n    }\n\n\n    return { size, sides, matrix, allShips, addShip, receiveAttack, allSunk, initializeShips }\n}\n\nmodule.exports = {\n    gameboardFactory\n}\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_game__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(0,_game__WEBPACK_IMPORTED_MODULE_1__.game)()\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const gameboardModule = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\")\n\nfunction playerFactory (name, isComputer = false) {\n    const gameboard = gameboardModule.gameboardFactory()\n    gameboard.initializeShips()\n\n    function attack(opponent, pos = null) {\n        if (!pos) {\n            pos = automaticPos()\n        }\n        const valid = validateAttack(opponent, pos) \n        if(valid) {\n            return opponent.gameboard.receiveAttack(pos)\n        } else {\n            if(!opponent.isComputer) {\n                attack(opponent, pos = null)\n            } else {\n                throw Error('This position is already hit')\n            }\n        }\n    }\n\n    function automaticPos() {\n        const cols = 'ABCDEFGHIJ'\n        const first_coord = cols[Math.floor(Math.random() * cols.length)]\n        const second_coord = Math.floor(Math.random() * (10 - 1 + 1) + 1)\n        return first_coord + second_coord\n    }\n\n    function validateAttack(opponent, pos) {\n        const coord = pos.match(/[a-zA-Z]+|[0-9]+/g)\n        const matrixValue = opponent.gameboard.matrix[coord[0]][coord[1]]\n\n        if(matrixValue === 'empty' || matrixValue === 'ship') {\n            return true\n        } else {\n            return false\n        }\n    }\n\n    return { name, isComputer, gameboard, attack }\n}\n\nmodule.exports = {\n    playerFactory\n}\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module) => {

eval("function shipFactory (len, initial_pos = null, direction = null) {\n    if (!direction) {\n        const dirOptions = ['vertical', 'horizontal']\n        direction = dirOptions[Math.floor(Math.random() * dirOptions.length)]\n    }\n\n    if(!initial_pos) {\n        let cols\n        let maxRow\n        switch(len) {\n            case 1:\n                cols = 'ABCDEFGHIJ'\n                maxRow = 10\n                break;\n            case 2:\n                cols = 'ABCDEFGHI'\n                maxRow = 9\n                break;\n            case 3:\n                cols = 'ABCDEFGH'\n                maxRow = 8\n                break;\n            case 4:\n                cols = 'ABCDEFG'\n                maxRow = 7\n                break;\n        }\n        const first_coord = cols[Math.floor(Math.random() * cols.length)]\n        const second_coord = Math.floor(Math.random() * (maxRow - 1 + 1) + 1)\n        initial_pos = first_coord + second_coord\n    }\n\n    const allPositions = calculateAllPos(len, initial_pos, direction)\n    const final_pos = allPositions[len - 1]\n\n    const hitPositions = []\n    \n    function hit(pos) {\n        if (hitPositions.includes(pos)) {\n            throw Error('This position is already hit')\n        }\n        allPositions.includes(pos) ? hitPositions.push(pos) : null\n    }\n\n    function isSunk() {\n        const notHitPositions = allPositions.filter(p => !hitPositions.includes(p))\n        return notHitPositions.length === 0\n    }\n\n    function calculateAllPos(len, initial_pos, direction) {\n        const allPositions = []\n    \n        allPositions.push(initial_pos)\n        let current_pos = initial_pos\n        for(let i = 1; i < len; i++) {\n            let split_current = splitPos(current_pos)\n            current_pos = direction === 'vertical' \n                ? split_current[0] + (parseInt(split_current[1]) + 1)                           // Add 1 to right coord A1 -> A2\n                : String.fromCharCode(split_current[0].charCodeAt(0) + 1) + split_current[1]    // Add 1 to left coord A1 -> B1\n    \n            allPositions.push(current_pos)\n        }\n    \n        return allPositions\n    }\n    \n    function splitPos(position) {\n        return position.match(/[a-zA-Z]+|[0-9]+/g)\n    }\n\n    return { len, initial_pos, final_pos, hitPositions, allPositions, hit, isSunk, splitPos }\n}\n\nmodule.exports = {\n    shipFactory\n}\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;