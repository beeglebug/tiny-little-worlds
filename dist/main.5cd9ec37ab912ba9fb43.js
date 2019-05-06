(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+KNp":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/react/Preview.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "\n.Preview__canvas {\n    display: block;\n    background-color: #333333;\n}\n", ""]);

// exports
exports.locals = {
	"canvas": "Preview__canvas"
};

/***/ }),

/***/ "02lr":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/react/Window.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, ".Window__container {\n    background-color: #aaaaaa;\n    margin: 10px;\n    font-family: m5x7, monospace;\n}\n\n.Window__header {\n    background-color: #888888;\n    color: #FFF;\n    text-transform: uppercase;\n    padding: 5px;\n}\n\n.Window__body {\n    padding: 5px;\n}\n", ""]);

// exports
exports.locals = {
	"container": "Window__container",
	"header": "Window__header",
	"body": "Window__body"
};

/***/ }),

/***/ "1Tnp":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/react/Tools.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "\n.Tools__button {\n    background-color: #FFFFFF;\n}\n\n.Tools__selected {\n    background-color: #555555;\n    color: #FFFFFF;\n}\n", ""]);

// exports
exports.locals = {
	"button": "Tools__button",
	"selected": "Tools__selected"
};

/***/ }),

/***/ "2pqL":
/*!*********************************************!*\
  !*** ./src/engine/physics/geometry/Rect.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rect; });
/* harmony import */ var _Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector2 */ "8r56");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _v = new _Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]();

var Rect =
/*#__PURE__*/
function () {
  function Rect() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, Rect);

    this.set(x, y, width, height);
  }

  _createClass(Rect, [{
    key: "set",
    value: function set(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      return this;
    }
  }, {
    key: "center",
    get: function get() {
      return _v.set(this.x + this.width / 2, this.y + this.height / 2);
    }
  }]);

  return Rect;
}();



/***/ }),

/***/ "5o+t":
/*!************************************************!*\
  !*** ./src/engine/physics/closestPointRect.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closestPointRect; });
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry/Vector2 */ "8r56");

/**
 * Determine the closest point on a rect to another point
 * @param {Vector2|Circle} point
 * @param {Rect} rect
 * @param {Vector2} output
 * @return
 */

function closestPointRect(point, rect) {
  var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]();

  if (point.x < rect.x) {
    output.x = rect.x;
  } else if (point.x > rect.x + rect.width) {
    output.x = rect.x + rect.width;
  } else {
    output.x = point.x;
  }

  if (point.y < rect.y) {
    output.y = rect.y;
  } else if (point.y > rect.y + rect.height) {
    output.y = rect.y + rect.height;
  } else {
    output.y = point.y;
  }

  return output;
}

/***/ }),

/***/ "6S3T":
/*!*************************************!*\
  !*** ./src/react/state/reducers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "h/jc");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialState */ "I3j7");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }





var selectedTile = function selectedTile() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_2__["default"].selectedTile;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["SELECT_TILE"]:
      return action.payload.tile;

    default:
      return state;
  }
};

var selectedTool = function selectedTool() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_2__["default"].selectedTool;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["SELECT_TOOL"]:
      return action.payload.tool;

    default:
      return state;
  }
};

var map = function map() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState__WEBPACK_IMPORTED_MODULE_2__["default"].map;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["SET_MAP_TILE"]:
      return setMapTile(state, action.payload);

    default:
      return state;
  }
};

function setMapTile(map, _ref) {
  var x = _ref.x,
      y = _ref.y,
      tile = _ref.tile;

  var data = _toConsumableArray(map.data);

  var ix = y * map.width + x;
  data[ix] = tile;
  return _objectSpread({}, map, {
    data: data
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  selectedTile: selectedTile,
  selectedTool: selectedTool,
  map: map
}));

/***/ }),

/***/ "7V87":
/*!*************************************************************!*\
  !*** ./src/engine/physics/collision/collideCircleCircle.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collideCircleCircle; });
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/Vector2 */ "8r56");
/* harmony import */ var _distanceBetween__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../distanceBetween */ "Y4q3");
/* harmony import */ var _closestPointCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../closestPointCircle */ "k+7I");




var _near = new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]();
/**
 * Check collision between two Circles
 * @param {Circle} c1
 * @param {Circle} c2
 * @param {CollisionResponse} response
 * @return {boolean} if a collision occurred
 */


function collideCircleCircle(c1, c2) {
  var response = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var dx = Math.abs(c1.x - c2.x);
  var dy = Math.abs(c1.y - c2.y);
  var dr = c1.radius + c2.radius;
  if (dx * dx + dy * dy >= dr * dr) return false;

  if (response) {
    Object(_closestPointCircle__WEBPACK_IMPORTED_MODULE_2__["default"])(c1, c2, _near);
    var distance = Object(_distanceBetween__WEBPACK_IMPORTED_MODULE_1__["default"])(_near, c1);
    response.position.set(_near.x, _near.y);
    response.normal.set(c1.x, c1.y).subtract(_near).normalize();
    response.depth = c1.radius - distance;
  }

  return true;
}

/***/ }),

/***/ "8r56":
/*!************************************************!*\
  !*** ./src/engine/physics/geometry/Vector2.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector2; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Vector2 =
/*#__PURE__*/
function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "copy",
    value: function copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply() {
      var scalar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
  }, {
    key: "divide",
    value: function divide() {
      var scalar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.x /= scalar;
      this.y /= scalar;
      return this;
    }
  }, {
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      return this;
    }
  }, {
    key: "abs",
    value: function abs() {
      this.x = Math.abs(this.x);
      this.y = Math.abs(this.y);
      return this;
    }
  }, {
    key: "floor",
    value: function floor() {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
      return this;
    }
  }, {
    key: "zero",
    value: function zero() {
      this.x = 0;
      this.y = 0;
      return this;
    }
  }, {
    key: "isZero",
    value: function isZero() {
      return this.x === 0 && this.y === 0;
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * alters the length of the vector without changing the direction
     * for example: [0,5].setMagnitude(2) = [0,2]
     * @return {Vector2} the modified original vector
     */

  }, {
    key: "setMagnitude",
    value: function setMagnitude(scalar) {
      return this.normalize().multiply(scalar);
    }
  }, {
    key: "normalize",
    value: function normalize() {
      // shortcuts to avoid magnitude sqrt
      if (this.isZero()) return this;

      if (this.x === 0) {
        this.y = this.y > 0 ? 1 : -1;
        return this;
      }

      if (this.y === 0) {
        this.x = this.x > 0 ? 1 : -1;
        return this;
      }

      var magnitude = this.magnitude();
      this.x /= magnitude;
      this.y /= magnitude;
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(a) {
      var cos = Math.cos(a);
      var sin = Math.sin(a);
      var x = cos * this.x - sin * this.y;
      var y = sin * this.x + cos * this.y;
      this.x = x;
      this.y = y;
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Vector2;
}();

_defineProperty(Vector2, "fromArray", function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref2 = _slicedToArray(_ref, 2),
      _ref2$ = _ref2[0],
      x = _ref2$ === void 0 ? 0 : _ref2$,
      _ref2$2 = _ref2[1],
      y = _ref2$2 === void 0 ? 0 : _ref2$2;

  return new Vector2(x, y);
});


Vector2.right = new Vector2(1, 0);
Vector2.left = new Vector2(-1, 0);
Vector2.up = new Vector2(0, -1);
Vector2.down = new Vector2(0, 1);

/***/ }),

/***/ "9qog":
/*!******************************************!*\
  !*** ./src/engine/findPlayerPosition.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return findPlayerPosition; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "uER/");

function findPlayerPosition(map) {
  var TILE_TYPE_PLAYER = 3;
  var index = map.data.findIndex(function (tile) {
    return tile === TILE_TYPE_PLAYER;
  });
  var x = index % map.width * _consts__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"];
  var y = Math.floor(index / map.width) * _consts__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"]; // convert from 2d [x, y] to 3d [x, y, z]

  return [x, 0, y];
}

/***/ }),

/***/ "C4Tb":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/react/Inspector.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "E3V2":
/*!***********************************!*\
  !*** ./src/engine/input/Input.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyCode */ "r18f");
/* harmony import */ var _physics_geometry_Vector2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../physics/geometry/Vector2 */ "8r56");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var buttons = {};
var downKeys = {};
var downKeysThisFrame = {};
var upKeysThisFrame = {};
var mousePosition = new _physics_geometry_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"]();
var mouseMove = new _physics_geometry_Vector2__WEBPACK_IMPORTED_MODULE_1__["default"]();
var MouseX = 'MouseX';
var MouseY = 'MouseY';
var LOCATION_LEFT = 1;
var LOCATION_RIGHT = 2;

var determineCode = function determineCode(event) {
  switch (event.keyCode) {
    case _KeyCode__WEBPACK_IMPORTED_MODULE_0__["default"].Shift:
      if (event.location === LOCATION_LEFT) return _KeyCode__WEBPACK_IMPORTED_MODULE_0__["default"].LeftShift;else if (event.location === LOCATION_RIGHT) return _KeyCode__WEBPACK_IMPORTED_MODULE_0__["default"].RightShift;
      break;

    case _KeyCode__WEBPACK_IMPORTED_MODULE_0__["default"].Control:
      if (event.location === LOCATION_LEFT) return _KeyCode__WEBPACK_IMPORTED_MODULE_0__["default"].LeftControl;else if (event.location === LOCATION_RIGHT) return _KeyCode__WEBPACK_IMPORTED_MODULE_0__["default"].RightControl;
      break;
  }

  return event.keyCode;
};

var handleKeyDown = function handleKeyDown(event) {
  var code = determineCode(event);
  downKeys[code] = true;
  downKeysThisFrame[code] = true;
};

var handleKeyUp = function handleKeyUp(event) {
  var code = determineCode(event);
  delete downKeys[code];
  upKeysThisFrame[code] = true;
};

var getKey = function getKey(key) {
  return downKeys[key] === true;
};

var getKeyDown = function getKeyDown(key) {
  return downKeysThisFrame[key] === true;
};

var getKeyUp = function getKeyUp(key) {
  return upKeysThisFrame[key] === true;
}; // reset at end of frame


var clear = function clear() {
  for (var key in downKeysThisFrame) {
    delete downKeysThisFrame[key];
  }

  for (var _key in upKeysThisFrame) {
    delete upKeysThisFrame[_key];
  }
};

var bind = function bind(target) {
  target.addEventListener('keydown', handleKeyDown);
  target.addEventListener('keyup', handleKeyUp);
  target.addEventListener('mousemove', handleMouseMove);
};

var unbind = function unbind(target) {
  target.removeEventListener('keydown', handleKeyDown);
  target.removeEventListener('keyup', handleKeyUp);
  target.removeEventListener('mousemove', handleMouseMove);
};

var timeout;

var handleMouseMove = function handleMouseMove(event) {
  clearTimeout(timeout);
  var movementX = event.movementX,
      movementY = event.movementY,
      clientX = event.clientX,
      clientY = event.clientY;
  mousePosition.x = clientX;
  mousePosition.y = clientY;
  mouseMove.x = movementX || 0;
  mouseMove.y = movementY || 0;
  timeout = setTimeout(clearMouseMove, 50);
};

var clearMouseMove = function clearMouseMove() {
  mouseMove.x = 0;
  mouseMove.y = 0;
};

var getAxis = function getAxis(axis) {
  switch (axis) {
    case MouseX:
      return mouseMove.x;

    case MouseY:
      return mouseMove.y;
  }
};

var createButton = function createButton(name) {
  for (var _len = arguments.length, keyCodes = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
    keyCodes[_key2 - 1] = arguments[_key2];
  }

  buttons[name] = keyCodes;
  return name;
};

var getButton = function getButton(name) {
  var button = buttons[name];
  if (!button) return false;
  return button.some(getKey);
};

var getButtonDown = function getButtonDown(name) {
  var button = buttons[name];
  if (!button) return false;
  return button.some(getKeyDown);
};

var getButtonUp = function getButtonUp(name) {
  var button = buttons[name];
  if (!button) return false;
  return button.some(getKeyUp);
};

var isButton = function isButton(keyCode, name) {
  return buttons[name] && buttons[name].includes(keyCode);
};

function checkExistingButtons(keyCodes) {
  var btns = Object.entries(buttons);
  keyCodes.forEach(function (code) {
    btns.forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          codes = _ref2[1];

      if (codes.includes(code)) {
        var codeName = Object(_KeyCode__WEBPACK_IMPORTED_MODULE_0__["getKeyForCode"])(code);
        console.warn("WARNING: Key '".concat(codeName, "' already assigned to button '").concat(name, "'"));
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  bind: bind,
  unbind: unbind,
  createButton: createButton,
  getKey: getKey,
  getAxis: getAxis,
  getKeyDown: getKeyDown,
  getButton: getButton,
  getButtonDown: getButtonDown,
  getButtonUp: getButtonUp,
  isButton: isButton,
  mousePosition: mousePosition,
  MouseX: MouseX,
  MouseY: MouseY,
  clear: clear
});

/***/ }),

/***/ "EXY2":
/*!******************************!*\
  !*** ./src/react/Tileset.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tileset; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tileset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tileset.css */ "O73v");
/* harmony import */ var _Tileset_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Tileset_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useCanvasWithMouse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useCanvasWithMouse */ "FFOE");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/actions */ "h/jc");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/selectors */ "oAEx");
/* harmony import */ var _util_tileset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/tileset */ "kBe7");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consts */ "b+9Y");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Window */ "OLix");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function Tileset(_ref) {
  var tileset = _ref.tileset;
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useCanvasWithMouse = Object(_hooks_useCanvasWithMouse__WEBPACK_IMPORTED_MODULE_2__["default"])(canvasRef),
      _useCanvasWithMouse2 = _slicedToArray(_useCanvasWithMouse, 2),
      ctx = _useCanvasWithMouse2[0],
      mousePosition = _useCanvasWithMouse2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var selectedTile = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_5__["selectedTileSelector"]);
  var selectedTool = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_5__["selectedToolSelector"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    draw();
  }, [ctx, selectedTile]);

  function handleClick() {
    var tile = Object(_util_tileset__WEBPACK_IMPORTED_MODULE_6__["getTileIndexFromPosition"])(mousePosition, tileset);
    dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_4__["selectTileAction"])(tile)); // reset tool selection

    if (selectedTool !== _consts__WEBPACK_IMPORTED_MODULE_7__["TOOLS"].PAINT) {
      dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_4__["selectToolAction"])(_consts__WEBPACK_IMPORTED_MODULE_7__["TOOLS"].PAINT));
    }
  }

  function draw() {
    if (!ctx) return;
    var width = tileset.width;
    var height = tileset.height;
    var size = tileset.tileSize;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(tileset.image, 0, 0);
    ctx.translate(0.5, 0.5);

    var _getPositionFromTileI = Object(_util_tileset__WEBPACK_IMPORTED_MODULE_6__["getPositionFromTileIndex"])(selectedTile, tileset),
        _getPositionFromTileI2 = _slicedToArray(_getPositionFromTileI, 2),
        x = _getPositionFromTileI2[0],
        y = _getPositionFromTileI2[1];

    ctx.strokeStyle = '#FFFFFF';
    ctx.strokeRect(x, y, size, size);
    ctx.translate(-0.5, -0.5);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: 'tileset'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: canvasRef,
    className: _Tileset_css__WEBPACK_IMPORTED_MODULE_1___default.a.canvas,
    width: tileset.width,
    height: tileset.height,
    onClick: handleClick
  }));
}

/***/ }),

/***/ "FFOE":
/*!***********************************************!*\
  !*** ./src/react/hooks/useCanvasWithMouse.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCanvasWithMouse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useCanvasWithMouse(canvasRef) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      ctx = _useState2[0],
      setCtx = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      rect = _useState4[0],
      setRect = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      mousePosition = _useState6[0],
      setMousePosition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mouseDown = _useState8[0],
      setMouseDown = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var canvas = canvasRef.current;
    var ctx = canvas.getContext('2d');
    setCtx(ctx);
    setRect(canvas.getBoundingClientRect());
  }, [canvasRef.current]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var canvas = canvasRef.current;

    function handleMouseMove(e) {
      var mousePosition = {
        x: e.pageX - rect.x,
        y: e.pageY - rect.y
      };
      setMousePosition(mousePosition);
    }

    function handleMouseLeave() {
      setMousePosition(null);
      setMouseDown(false);
    }

    function handleMouseDown() {
      setMouseDown(true);
    }

    function handleMouseUp() {
      setMouseDown(false);
    }

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    return function () {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  }, [canvasRef.current, rect]);
  return [ctx, mousePosition, mouseDown];
}

/***/ }),

/***/ "FdW2":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/index.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "sEG9");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, "html, body {\n    height: 100%;\n    margin: 0;\n    font-size: 16pt;\n}\n\n@font-face {\n    font-family: m5x7;\n    src: url(" + escape(__webpack_require__(/*! ./assets/fonts/m5x7.ttf */ "pJLB")) + ");\n}\n", ""]);

// exports


/***/ }),

/***/ "GKq8":
/*!*********************************!*\
  !*** ./src/react/MapEditor.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--9-1!./MapEditor.css */ "Nr8i");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "GdsF":
/*!****************************!*\
  !*** ./src/react/Tools.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tools; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tools_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tools.css */ "fwtq");
/* harmony import */ var _Tools_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tools_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consts */ "b+9Y");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/actions */ "h/jc");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/selectors */ "oAEx");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Window */ "OLix");








function Tools() {
  var selectedTool = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_6__["selectedToolSelector"]);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  function selectTool(tool) {
    if (tool !== selectedTool) {
      dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_5__["selectToolAction"])(tool));
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: 'Tools'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return selectTool(_consts__WEBPACK_IMPORTED_MODULE_4__["TOOLS"].PAINT);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Tools_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, selectedTool === _consts__WEBPACK_IMPORTED_MODULE_4__["TOOLS"].PAINT && _Tools_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected)
  }, "paint"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return selectTool(_consts__WEBPACK_IMPORTED_MODULE_4__["TOOLS"].ERASE);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Tools_css__WEBPACK_IMPORTED_MODULE_3___default.a.button, selectedTool === _consts__WEBPACK_IMPORTED_MODULE_4__["TOOLS"].ERASE && _Tools_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected)
  }, "erase"));
}

/***/ }),

/***/ "I3j7":
/*!*****************************************!*\
  !*** ./src/react/state/initialState.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "b+9Y");

/* harmony default export */ __webpack_exports__["default"] = ({
  selectedTile: 1,
  selectedTool: _consts__WEBPACK_IMPORTED_MODULE_0__["TOOLS"].PAINT,
  map: {
    width: 16,
    height: 16,
    tileSize: 16,
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 2, 2, 0, 2, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  }
});

/***/ }),

/***/ "IaF1":
/*!**********************************!*\
  !*** ./src/react/state/store.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "ANjH");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "SVmU");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "C+HQ");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "6S3T");




var persistConfig = {
  key: 'root',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default.a
};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistStore"])(store);
  return [store, persistor];
});

/***/ }),

/***/ "KEG0":
/*!*********************************!*\
  !*** ./src/react/Inspector.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--9-1!./Inspector.css */ "C4Tb");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "Nr8i":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/react/MapEditor.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, ".MapEditor__canvas {\n    display: block;\n}\n", ""]);

// exports
exports.locals = {
	"canvas": "MapEditor__canvas"
};

/***/ }),

/***/ "O73v":
/*!*******************************!*\
  !*** ./src/react/Tileset.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--9-1!./Tileset.css */ "fz9B");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "OLix":
/*!*****************************!*\
  !*** ./src/react/Window.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Window; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Window_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Window.css */ "SpLA");
/* harmony import */ var _Window_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Window_css__WEBPACK_IMPORTED_MODULE_1__);


function Window(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Window_css__WEBPACK_IMPORTED_MODULE_1___default.a.container
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Window_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Window_css__WEBPACK_IMPORTED_MODULE_1___default.a.body
  }, children));
}

/***/ }),

/***/ "OTzy":
/*!***********************************!*\
  !*** ./src/engine/createWorld.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWorld; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ "uER/");
/* harmony import */ var _physics_geometry_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics/geometry/Rect */ "2pqL");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Physics */ "xIh9");




function createWorld(map) {
  var world = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
  var colliders = [];

  for (var y = 0; y < map.height; y++) {
    for (var x = 0; x < map.width; x++) {
      var ix = y * map.width + x;
      var tile = map.data[ix];
      if (tile === 0) continue;
      var dx = x * _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"];
      var dy = y * _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"];
      var mesh = void 0;

      if (tile === 2) {
        mesh = wallMesh.clone();
        var collider = new _physics_geometry_Rect__WEBPACK_IMPORTED_MODULE_2__["default"](dx - _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"] / 2, dy - _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"] / 2, _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
        colliders.push(collider);
      } else {
        mesh = floorMesh.clone();
      } // 2d to 3d


      mesh.position.set(dx, 0, dy);
      world.add(mesh);
    }
  }

  _Physics__WEBPACK_IMPORTED_MODULE_3__["default"].setColliders(colliders);
  return world;
}
var loader = new three__WEBPACK_IMPORTED_MODULE_0__["TextureLoader"]();
var wallTexture = loader.load('./assets/wall.png');
wallTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
wallTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
var floorTexture = loader.load('./assets/floor.png');
floorTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
floorTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_0__["NearestFilter"];
var wallMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
  map: wallTexture
});
var wallGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](_consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], _consts__WEBPACK_IMPORTED_MODULE_1__["WALL_HEIGHT"], _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
wallGeometry.translate(0, _consts__WEBPACK_IMPORTED_MODULE_1__["WALL_HEIGHT"] / 2, 0);
var wallMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](wallGeometry, wallMaterial);
var floorMaterial = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
  map: floorTexture
});
var floorGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](_consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
floorGeometry.rotateX(-Math.PI / 2);
var ceilingGeometry = new three__WEBPACK_IMPORTED_MODULE_0__["PlaneGeometry"](_consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"], _consts__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]);
ceilingGeometry.rotateX(Math.PI / 2);
ceilingGeometry.translate(0, _consts__WEBPACK_IMPORTED_MODULE_1__["WALL_HEIGHT"], 0);
three__WEBPACK_IMPORTED_MODULE_0__["GeometryUtils"].merge(floorGeometry, ceilingGeometry);
var floorMesh = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](floorGeometry, floorMaterial);

/***/ }),

/***/ "REV5":
/*!*******************************************!*\
  !*** ./src/engine/CharacterController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterController; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/KeyCode */ "r18f");
/* harmony import */ var _input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input/Input */ "E3V2");
/* harmony import */ var _maths_clamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maths/clamp */ "TOjn");
/* harmony import */ var _physics_geometry_Circle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./physics/geometry/Circle */ "z23c");
/* harmony import */ var _physics_separate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./physics/separate */ "fCAJ");
/* harmony import */ var _Physics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Physics */ "xIh9");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var halfPi = Math.PI / 2;

var CharacterController =
/*#__PURE__*/
function (_Object3D) {
  _inherits(CharacterController, _Object3D);

  function CharacterController(camera) {
    var _this;

    _classCallCheck(this, CharacterController);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterController).call(this));

    _defineProperty(_assertThisInitialized(_this), "enabled", false);

    _defineProperty(_assertThisInitialized(_this), "eyeHeight", 1.8);

    _defineProperty(_assertThisInitialized(_this), "velocity", new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]());

    _defineProperty(_assertThisInitialized(_this), "direction", new three__WEBPACK_IMPORTED_MODULE_0__["Vector3"]());

    _defineProperty(_assertThisInitialized(_this), "collider", null);

    _defineProperty(_assertThisInitialized(_this), "mouseSensitivity", 0.6);

    _defineProperty(_assertThisInitialized(_this), "speed", 100);

    _defineProperty(_assertThisInitialized(_this), "runSpeed", 200);

    _this.pitch = new three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]();
    _this.pitch.position.y = _this.eyeHeight;

    _this.add(_this.pitch);

    _this.pitch.add(camera);

    _this.collider = new _physics_geometry_Circle__WEBPACK_IMPORTED_MODULE_4__["default"](0, 0, 0.6);
    _this.controls = {
      forward: _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].createButton('forward', _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].W, _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].UpArrow),
      back: _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].createButton('back', _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].S, _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].DownArrow),
      left: _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].createButton('left', _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].A, _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].LeftArrow),
      right: _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].createButton('right', _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].D, _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].RightArrow),
      run: _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].createButton('run', _input_KeyCode__WEBPACK_IMPORTED_MODULE_1__["default"].LeftShift)
    };
    return _this;
  }

  _createClass(CharacterController, [{
    key: "resetRotation",
    value: function resetRotation(y, x) {
      this.rotation.y = y;
      this.pitch.rotation.x = x;
    }
  }, {
    key: "handleMouseInput",
    value: function handleMouseInput(delta) {
      // apply mouse movement
      this.rotation.y -= _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getAxis(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].MouseX) * delta * this.mouseSensitivity;
      this.pitch.rotation.x -= _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getAxis(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].MouseY) * delta * this.mouseSensitivity; // clamp between straight down and straight up

      this.pitch.rotation.x = Object(_maths_clamp__WEBPACK_IMPORTED_MODULE_3__["default"])(this.pitch.rotation.x, -halfPi, halfPi);
    }
  }, {
    key: "handleKeyboardInput",
    value: function handleKeyboardInput(delta) {
      var moveForward = _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getButton(this.controls.forward);
      var moveBack = _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getButton(this.controls.back);
      var moveLeft = _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getButton(this.controls.left);
      var moveRight = _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getButton(this.controls.right);
      var running = _input_Input__WEBPACK_IMPORTED_MODULE_2__["default"].getButton(this.controls.run); // apply damping

      this.velocity.x -= this.velocity.x * 10.0 * delta;
      this.velocity.z -= this.velocity.z * 10.0 * delta;
      this.direction.z = moveForward - moveBack;
      this.direction.x = moveLeft - moveRight;
      this.direction.normalize();
      var z = this.direction.z * (running ? this.runSpeed : this.speed);
      var x = this.direction.x * (running ? this.runSpeed : this.speed);
      if (moveForward || moveBack) this.velocity.z -= z * delta;
      if (moveLeft || moveRight) this.velocity.x -= x * delta;
    }
  }, {
    key: "handlePhysics",
    value: function handlePhysics() {
      // copy position to the collider
      this.collider.x = this.position.x;
      this.collider.y = this.position.z; // stop the player going into the cubes

      var colliders = _Physics__WEBPACK_IMPORTED_MODULE_6__["default"].getColliders(this);
      Object(_physics_separate__WEBPACK_IMPORTED_MODULE_5__["default"])(this.collider, colliders); // update the player controller based on the collider

      this.position.set(this.collider.x, 0, this.collider.y);
    }
  }, {
    key: "update",
    value: function update(delta) {
      if (!this.enabled) return;
      this.handleMouseInput(delta);
      this.handleKeyboardInput(delta);
      this.translateX(this.velocity.x * delta);
      this.translateZ(this.velocity.z * delta);
      this.handlePhysics();
    }
  }]);

  return CharacterController;
}(three__WEBPACK_IMPORTED_MODULE_0__["Object3D"]);



/***/ }),

/***/ "RPia":
/*!********************************!*\
  !*** ./src/react/MapEditor.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _MapEditor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapEditor.css */ "GKq8");
/* harmony import */ var _MapEditor_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MapEditor_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useCanvasWithMouse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/useCanvasWithMouse */ "FFOE");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state/selectors */ "oAEx");
/* harmony import */ var _util_tileset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/tileset */ "kBe7");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state/actions */ "h/jc");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./consts */ "b+9Y");
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Window */ "OLix");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function MapEditor(_ref) {
  var tileset = _ref.tileset,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? '#7a7a7a' : _ref$backgroundColor,
      _ref$gridColor = _ref.gridColor,
      gridColor = _ref$gridColor === void 0 ? '#959595' : _ref$gridColor;
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var selectedTile = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_4__["selectedTileSelector"]);
  var map = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_4__["mapSelector"]);
  var selectedTool = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_4__["selectedToolSelector"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      currentTileIndex = _useState2[0],
      setCurrentTileIndex = _useState2[1];

  var _useCanvasWithMouse = Object(_hooks_useCanvasWithMouse__WEBPACK_IMPORTED_MODULE_3__["default"])(canvasRef),
      _useCanvasWithMouse2 = _slicedToArray(_useCanvasWithMouse, 3),
      ctx = _useCanvasWithMouse2[0],
      mousePosition = _useCanvasWithMouse2[1],
      mouseDown = _useCanvasWithMouse2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    draw();
  }, [ctx, map, mousePosition]);

  function handleMouseDown() {
    if (selectedTool === _consts__WEBPACK_IMPORTED_MODULE_7__["TOOLS"].INSPECT) {
      console.log(1);
    } else {
      paintCurrentMapTile();
    }
  }

  function handleMouseMove() {
    var size = map.tileSize;
    var x = Math.floor(mousePosition.x / size);
    var y = Math.floor(mousePosition.y / size);
    var index = y * map.width + x;

    if (mouseDown && currentTileIndex !== index) {
      paintCurrentMapTile();
    }

    setCurrentTileIndex(index);
  }

  function paintCurrentMapTile() {
    var tile;

    if (selectedTool === _consts__WEBPACK_IMPORTED_MODULE_7__["TOOLS"].PAINT) {
      tile = selectedTile;
    } else if (selectedTool === _consts__WEBPACK_IMPORTED_MODULE_7__["TOOLS"].ERASE) {
      tile = 0;
    }

    var size = map.tileSize;
    var x = Math.floor(mousePosition.x / size);
    var y = Math.floor(mousePosition.y / size);
    dispatch(Object(_state_actions__WEBPACK_IMPORTED_MODULE_6__["setMapTileAction"])(x, y, tile));
  }

  function draw() {
    if (!ctx) return;
    var size = map.tileSize;
    var width = map.width * size;
    var height = map.height * size;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);
    drawTiles(ctx, map, tileset);
    drawGrid(ctx, width, height, size, gridColor);

    if (mousePosition) {
      var x = Math.floor(mousePosition.x / size) * size;
      var y = Math.floor(mousePosition.y / size) * size;
      drawCursor(ctx, x, y, selectedTile, selectedTool, map, tileset);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: 'Editor'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: canvasRef,
    className: _MapEditor_css__WEBPACK_IMPORTED_MODULE_2___default.a.canvas,
    width: map.width * map.tileSize,
    height: map.height * map.tileSize,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove
  }));
}

function drawGrid(ctx, width, height, size, gridColor) {
  ctx.translate(0.5, 0.5);
  ctx.strokeStyle = gridColor;

  for (var y = size; y < height; y += size) {
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
  }

  for (var x = size; x < width; x += size) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
  }

  ctx.stroke();
  ctx.translate(-0.5, -0.5);
}

function drawCursor(ctx, dx, dy, selectedTile, selectedTool, map, tileset) {
  var _getPositionFromTileI = Object(_util_tileset__WEBPACK_IMPORTED_MODULE_5__["getPositionFromTileIndex"])(selectedTile, tileset),
      _getPositionFromTileI2 = _slicedToArray(_getPositionFromTileI, 2),
      sx = _getPositionFromTileI2[0],
      sy = _getPositionFromTileI2[1];

  if (selectedTool === _consts__WEBPACK_IMPORTED_MODULE_7__["TOOLS"].PAINT) {
    ctx.drawImage(tileset.image, sx, sy, map.tileSize, map.tileSize, dx, dy, tileset.tileSize, tileset.tileSize);
  }

  ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.fillRect(dx, dy, map.tileSize, map.tileSize);
}

function drawTiles(ctx, map, tileset) {
  for (var y = 0; y < map.height; y++) {
    for (var x = 0; x < map.width; x++) {
      var ix = y * map.width + x;
      var tile = map.data[ix];
      if (tile === 0) continue;
      var dx = x * map.tileSize;
      var dy = y * map.tileSize;

      var _getPositionFromTileI3 = Object(_util_tileset__WEBPACK_IMPORTED_MODULE_5__["getPositionFromTileIndex"])(tile, tileset),
          _getPositionFromTileI4 = _slicedToArray(_getPositionFromTileI3, 2),
          sx = _getPositionFromTileI4[0],
          sy = _getPositionFromTileI4[1];

      ctx.drawImage(tileset.image, sx, sy, tileset.tileSize, tileset.tileSize, dx, dy, map.tileSize, map.tileSize);
    }
  }
}

/***/ }),

/***/ "SpLA":
/*!******************************!*\
  !*** ./src/react/Window.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--9-1!./Window.css */ "02lr");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "T0Ow":
/*!******************************!*\
  !*** ./src/react/Preview.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Preview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/selectors */ "oAEx");
/* harmony import */ var _engine_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../engine/Game */ "jN8S");
/* harmony import */ var _Preview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Preview.css */ "VD3g");
/* harmony import */ var _Preview_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Preview_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Window */ "OLix");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Preview() {
  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      running = _useState2[0],
      setRunning = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      game = _useState4[0],
      setGame = _useState4[1];

  var map = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_state_selectors__WEBPACK_IMPORTED_MODULE_2__["mapSelector"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var game = new _engine_Game__WEBPACK_IMPORTED_MODULE_3__["default"](canvasRef.current);
    setGame(game);
  }, []);

  function handlePlay() {
    setRunning(true);
    game.start(map);

    game.onStop = function () {
      setRunning(false);
    };
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: 'Preview'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    ref: canvasRef,
    tabIndex: 1,
    className: _Preview_css__WEBPACK_IMPORTED_MODULE_4___default.a.canvas,
    width: 320,
    height: 180
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: handlePlay
  }, running ? 'pause' : 'play'));
}

/***/ }),

/***/ "TOjn":
/*!***********************************!*\
  !*** ./src/engine/maths/clamp.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clamp; });
/**
 * @param number
 * @param min
 * @param max
 * @returns {number}
 */
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}

/***/ }),

/***/ "UWe0":
/*!****************************!*\
  !*** ./src/engine/Time.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Time =
/*#__PURE__*/
function () {
  function Time() {
    _classCallCheck(this, Time);

    this._prev = null;
    this.deltaTime = 0;
  }

  _createClass(Time, [{
    key: "update",
    value: function update(time) {
      this.deltaTime = (this._prev === null ? 0 : time - this._prev) / 1000;
      this._prev = time;
    }
  }]);

  return Time;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Time());

/***/ }),

/***/ "UueK":
/*!***********************************************************!*\
  !*** ./src/engine/physics/collision/collideCircleRect.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collideCircleRect; });
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/Vector2 */ "8r56");
/* harmony import */ var _closestPointRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../closestPointRect */ "5o+t");
/* harmony import */ var _collidePointCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collidePointCircle */ "lxbr");
/* harmony import */ var _distanceBetween__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../distanceBetween */ "Y4q3");





var _near = new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]();
/**
 * Check collision between a Circle and a Rect
 * @param {Circle} circle
 * @param {Rect} rect
 * @param {CollisionResponse} response
 * @return {boolean} if a collision occurred
 */


function collideCircleRect(circle, rect) {
  var response = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  Object(_closestPointRect__WEBPACK_IMPORTED_MODULE_1__["default"])(circle, rect, _near.zero());
  if (!Object(_collidePointCircle__WEBPACK_IMPORTED_MODULE_2__["default"])(_near, circle)) return false;

  if (response) {
    var distance = Object(_distanceBetween__WEBPACK_IMPORTED_MODULE_3__["default"])(_near, circle);
    response.position.set(_near.x, _near.y);
    response.normal.set(circle.x, circle.y).subtract(_near).normalize();
    response.depth = circle.radius - distance;
  }

  return true;
}

/***/ }),

/***/ "VD3g":
/*!*******************************!*\
  !*** ./src/react/Preview.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--9-1!./Preview.css */ "+KNp");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "XgIN":
/*!****************************!*\
  !*** ./src/engine/loop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loop; });
/* harmony import */ var _Time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Time */ "UWe0");
/* global requestAnimationFrame */

function loop(fn) {
  var id;

  var step = function step(time) {
    id = requestAnimationFrame(step);
    _Time__WEBPACK_IMPORTED_MODULE_0__["default"].update(time);
    fn(_Time__WEBPACK_IMPORTED_MODULE_0__["default"].deltaTime);
  };

  step();
  return function () {
    return cancelAnimationFrame(id);
  };
}

/***/ }),

/***/ "Y4q3":
/*!***********************************************!*\
  !*** ./src/engine/physics/distanceBetween.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return distanceBetween; });
function distanceBetween(v1, v2) {
  var dx = Math.abs(v1.x - v2.x);
  var dy = Math.abs(v1.y - v2.y);
  return Math.sqrt(dx * dx + dy * dy);
}

/***/ }),

/***/ "b+9Y":
/*!*****************************!*\
  !*** ./src/react/consts.js ***!
  \*****************************/
/*! exports provided: TOOLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS", function() { return TOOLS; });
var TOOLS = Object.freeze({
  PAINT: 'PAINT',
  ERASE: 'ERASE',
  INSPECT: 'INSPECT'
});

/***/ }),

/***/ "fCAJ":
/*!****************************************!*\
  !*** ./src/engine/physics/separate.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collision_CollisionResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision/CollisionResponse */ "nAb/");
/* harmony import */ var _collision_collideCircleRect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collision/collideCircleRect */ "UueK");
/* harmony import */ var _geometry_Rect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geometry/Rect */ "2pqL");
/* harmony import */ var _geometry_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geometry/Circle */ "z23c");
/* harmony import */ var _collision_collideCircleCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collision/collideCircleCircle */ "7V87");






var _response = new _collision_CollisionResponse__WEBPACK_IMPORTED_MODULE_0__["default"]();

/* harmony default export */ __webpack_exports__["default"] = (function (target, obstacles) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = obstacles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var obstacle = _step.value;
      var collisionFn = getCollisionFn(target, obstacle);

      if (collisionFn(target, obstacle, _response)) {
        var mtd = _response.mtd;
        target.x += mtd.x;
        target.y += mtd.y;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}); // TODO currently assumes target is always a circle

var getCollisionFn = function getCollisionFn(target, obstacle) {
  if (obstacle instanceof _geometry_Rect__WEBPACK_IMPORTED_MODULE_2__["default"]) return _collision_collideCircleRect__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (obstacle instanceof _geometry_Circle__WEBPACK_IMPORTED_MODULE_3__["default"]) return _collision_collideCircleCircle__WEBPACK_IMPORTED_MODULE_4__["default"];
};

/***/ }),

/***/ "fwtq":
/*!*****************************!*\
  !*** ./src/react/Tools.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--9-1!./Tools.css */ "1Tnp");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "fz9B":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./src/react/Tileset.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "I1BE")(false);
// imports


// module
exports.push([module.i, ".Tileset__canvas {\n    display: block;\n}\n", ""]);

// exports
exports.locals = {
	"canvas": "Tileset__canvas"
};

/***/ }),

/***/ "h/jc":
/*!************************************!*\
  !*** ./src/react/state/actions.js ***!
  \************************************/
/*! exports provided: SELECT_TILE, SELECT_TOOL, SET_MAP_TILE, selectTileAction, selectToolAction, setMapTileAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_TILE", function() { return SELECT_TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_TOOL", function() { return SELECT_TOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MAP_TILE", function() { return SET_MAP_TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTileAction", function() { return selectTileAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectToolAction", function() { return selectToolAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapTileAction", function() { return setMapTileAction; });
var SELECT_TILE = 'SELECT_TILE';
var SELECT_TOOL = 'SELECT_TOOL';
var SET_MAP_TILE = 'SET_MAP_TILE';
var selectTileAction = function selectTileAction(tile) {
  return {
    type: SELECT_TILE,
    payload: {
      tile: tile
    }
  };
};
var selectToolAction = function selectToolAction(tool) {
  return {
    type: SELECT_TOOL,
    payload: {
      tool: tool
    }
  };
};
var setMapTileAction = function setMapTileAction(x, y, tile) {
  return {
    type: SET_MAP_TILE,
    payload: {
      x: x,
      y: y,
      tile: tile
    }
  };
};

/***/ }),

/***/ "jN8S":
/*!****************************!*\
  !*** ./src/engine/Game.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");
/* harmony import */ var _createScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createScene */ "vvp1");
/* harmony import */ var _CharacterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharacterController */ "REV5");
/* harmony import */ var _input_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input/Input */ "E3V2");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consts */ "uER/");
/* harmony import */ var _loop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loop */ "XgIN");
/* harmony import */ var _createWorld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createWorld */ "OTzy");
/* harmony import */ var _findPlayerPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./findPlayerPosition */ "9qog");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Game =
/*#__PURE__*/
function () {
  function Game(canvas) {
    var _this = this;

    _classCallCheck(this, Game);

    _defineProperty(this, "tick", function (deltaTime) {
      _this.controller.update(deltaTime);

      _this.renderer.render(_this.scene, _this.camera);

      _input_Input__WEBPACK_IMPORTED_MODULE_3__["default"].clear();
    });

    this.canvas = canvas;
    this.scene = Object(_createScene__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"]({
      canvas: canvas
    });
    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](45, _consts__WEBPACK_IMPORTED_MODULE_4__["WIDTH"] / _consts__WEBPACK_IMPORTED_MODULE_4__["HEIGHT"], 0.1, 1000);
    this.controller = new _CharacterController__WEBPACK_IMPORTED_MODULE_2__["default"](this.camera);
    this.scene.add(this.controller);
    this.setupPointerLock(canvas);
  }

  _createClass(Game, [{
    key: "start",
    value: function start(map) {
      _input_Input__WEBPACK_IMPORTED_MODULE_3__["default"].bind(this.canvas);
      this.world = Object(_createWorld__WEBPACK_IMPORTED_MODULE_6__["default"])(map);

      var _findPlayerPosition = Object(_findPlayerPosition__WEBPACK_IMPORTED_MODULE_7__["default"])(map),
          _findPlayerPosition2 = _slicedToArray(_findPlayerPosition, 3),
          x = _findPlayerPosition2[0],
          y = _findPlayerPosition2[1],
          z = _findPlayerPosition2[2];

      this.controller.position.set(x, y, z);
      this.controller.resetRotation(Math.PI, 0);
      this.controller.handlePhysics(); // force update the 2d collider

      this.scene.add(this.world);
      this.canvas.focus();
      this.canvas.requestPointerLock();
      this.cancelLoop = Object(_loop__WEBPACK_IMPORTED_MODULE_5__["default"])(this.tick);
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this2 = this;

      _input_Input__WEBPACK_IMPORTED_MODULE_3__["default"].unbind(this.canvas);
      this.world.children.forEach(function (child) {
        _this2.world.remove(child);
      });
      this.canvas.blur();
      this.cancelLoop();
      this.onStop();
    }
  }, {
    key: "setupPointerLock",
    value: function setupPointerLock(domElement) {
      var _this3 = this;

      var handlePointerLockChange = function handlePointerLockChange() {
        if (document.pointerLockElement === domElement) {
          _this3.controller.enabled = true;
        } else {
          _this3.controller.enabled = false;

          _this3.stop();
        }
      };

      var handlePointerLockError = function handlePointerLockError() {
        return console.warn('Pointer Lock Error');
      };

      document.addEventListener('pointerlockchange', handlePointerLockChange);
      document.addEventListener('pointerlockerror', handlePointerLockError);
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "k+7I":
/*!**************************************************!*\
  !*** ./src/engine/physics/closestPointCircle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return closestPointCircle; });
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometry/Vector2 */ "8r56");

/**
 * Determine the closest point on a circle to a reference point
 * @param {Vector2} point a point in space
 * @param {Circle} circle a circle
 * @param {Vector2} output
 * @return {Vector2} the closest point on the circle to the point
 */

function closestPointCircle(point, circle) {
  var output = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]();
  output.set(point.x - circle.x, point.y - circle.y);

  if (output.x * output.x + output.y * output.y < circle.radius * circle.radius) {
    return output.set(point.x, point.y);
  }

  return output.setMagnitude(circle.radius).add(circle);
}

/***/ }),

/***/ "kBe7":
/*!***********************************!*\
  !*** ./src/react/util/tileset.js ***!
  \***********************************/
/*! exports provided: getTileIndexFromPosition, getPositionFromTileIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTileIndexFromPosition", function() { return getTileIndexFromPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPositionFromTileIndex", function() { return getPositionFromTileIndex; });
function getTileIndexFromPosition(mousePosition, tileset) {
  var columns = tileset.width / tileset.tileSize;
  var x = Math.floor(mousePosition.x / tileset.tileSize);
  var y = Math.floor(mousePosition.y / tileset.tileSize); // indices are shifted by 1 to allow zero to represent empty space

  return y * columns + x + 1;
}
function getPositionFromTileIndex(index, tileset) {
  // indices are shifted by 1 to allow zero to represent empty space
  index = index - 1;
  var columns = tileset.width / tileset.tileSize;
  var x = index % columns * tileset.tileSize;
  var y = Math.floor(index / columns) * tileset.tileSize;
  return [x, y];
}

/***/ }),

/***/ "lxbr":
/*!************************************************************!*\
  !*** ./src/engine/physics/collision/collidePointCircle.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collidePointCircle; });
/**
 * calculate collision between a point and a Circle
 * @param {Vector2} point
 * @param {Circle} circle
 * @return {boolean} if the point is inside the circle
 */
function collidePointCircle(point, circle) {
  var dx = Math.abs(circle.x - point.x);
  var dy = Math.abs(circle.y - point.y);
  return dx * dx + dy * dy < circle.radius * circle.radius;
}

/***/ }),

/***/ "nAb/":
/*!***********************************************************!*\
  !*** ./src/engine/physics/collision/CollisionResponse.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollisionResponse; });
/* harmony import */ var _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/Vector2 */ "8r56");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var CollisionResponse =
/*#__PURE__*/
function () {
  function CollisionResponse() {
    _classCallCheck(this, CollisionResponse);

    _defineProperty(this, "position", new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]());

    _defineProperty(this, "normal", new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]());

    _defineProperty(this, "depth", 0);

    _defineProperty(this, "_mtd", new _geometry_Vector2__WEBPACK_IMPORTED_MODULE_0__["default"]());
  }

  _createClass(CollisionResponse, [{
    key: "reset",
    value: function reset() {
      this.position.zero();
      this.normal.zero();
      this.depth = 0;

      this._mtd.zero();
    }
  }, {
    key: "mtd",
    get: function get() {
      return this._mtd.set(this.normal.x, this.normal.y).multiply(this.depth);
    }
  }]);

  return CollisionResponse;
}();



/***/ }),

/***/ "oAEx":
/*!**************************************!*\
  !*** ./src/react/state/selectors.js ***!
  \**************************************/
/*! exports provided: selectedTileSelector, selectedToolSelector, mapSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedTileSelector", function() { return selectedTileSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedToolSelector", function() { return selectedToolSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapSelector", function() { return mapSelector; });
var selectedTileSelector = function selectedTileSelector(state) {
  return state.selectedTile;
};
var selectedToolSelector = function selectedToolSelector(state) {
  return state.selectedTool;
};
var mapSelector = function mapSelector(state) {
  return state.map;
};

/***/ }),

/***/ "p2bk":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--9-1!./index.css */ "FdW2");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "aET+")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "pJLB":
/*!***********************************!*\
  !*** ./src/assets/fonts/m5x7.ttf ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/fonts/m5x7.ttf";

/***/ }),

/***/ "pnkl":
/*!********************************!*\
  !*** ./src/react/Inspector.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Inspector_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inspector.css */ "KEG0");
/* harmony import */ var _Inspector_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Inspector_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Window */ "OLix");



function Inspector() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Window__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: 'inspector'
  }, "???");
}

/***/ }),

/***/ "r18f":
/*!*************************************!*\
  !*** ./src/engine/input/KeyCode.js ***!
  \*************************************/
/*! exports provided: default, getKeyForCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyForCode", function() { return getKeyForCode; });
var keyCodes = {
  Backspace: 8,
  Tab: 9,
  Enter: 13,
  Pause: 19,
  Caps: 20,
  Esc: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  LeftArrow: 37,
  UpArrow: 38,
  RightArrow: 39,
  DownArrow: 40,
  Insert: 45,
  Delete: 46,
  Alpha0: 48,
  Alpha1: 49,
  Alpha2: 50,
  Alpha3: 51,
  Alpha4: 52,
  Alpha5: 53,
  Alpha6: 54,
  Alpha7: 55,
  Alpha8: 56,
  Alpha9: 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  Keypad0: 96,
  Keypad1: 97,
  Keypad2: 98,
  Keypad3: 99,
  Keypad4: 100,
  Keypad5: 101,
  Keypad6: 102,
  Keypad7: 103,
  Keypad8: 104,
  Keypad9: 105,
  KeypadMultiply: 106,
  KeypadPlus: 107,
  KeypadMinus: 109,
  KeypadPeriod: 110,
  KeypadDivide: 111,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  Shift: 16,
  Control: 17,
  LeftShift: 'LeftShift',
  RightShift: 'RightShift',
  LeftControl: 'LeftControl',
  RightControl: 'RightControl',
  Alt: 18,
  Plus: 187,
  Comma: 188,
  Minus: 189,
  Period: 190,
  Tilde: 223
};
/* harmony default export */ __webpack_exports__["default"] = (keyCodes);
var byKeyCode = {};

for (var name in keyCodes) {
  byKeyCode[keyCodes[name]] = name;
}

var getKeyForCode = function getKeyForCode(code) {
  return byKeyCode[code];
};

/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react/App */ "zm76");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "p2bk");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);




var container = document.createElement('div');
document.body.appendChild(container);
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_App__WEBPACK_IMPORTED_MODULE_2__["default"], null), container);

/***/ }),

/***/ "uER/":
/*!******************************!*\
  !*** ./src/engine/consts.js ***!
  \******************************/
/*! exports provided: RENDER_WIDTH, RENDER_HEIGHT, WIDTH, HEIGHT, TILE_SIZE, WALL_HEIGHT, PI_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_WIDTH", function() { return RENDER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RENDER_HEIGHT", function() { return RENDER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WIDTH", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEIGHT", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return TILE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WALL_HEIGHT", function() { return WALL_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PI_2", function() { return PI_2; });
var RENDER_WIDTH = 320;
var RENDER_HEIGHT = 200;
var WIDTH = 640;
var HEIGHT = 400;
var TILE_SIZE = 2;
var WALL_HEIGHT = 3;
var PI_2 = Math.PI * 2;

/***/ }),

/***/ "vvp1":
/*!***********************************!*\
  !*** ./src/engine/createScene.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createScene; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "Womt");

function createScene() {
  var scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"]();
  scene.background = new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('#ffffff');
  scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__["Fog"](scene.background, 0, 100);
  var light = new three__WEBPACK_IMPORTED_MODULE_0__["AmbientLight"](new three__WEBPACK_IMPORTED_MODULE_0__["Color"]('#ffffff'));
  scene.add(light);
  return scene;
}

/***/ }),

/***/ "xIh9":
/*!*******************************!*\
  !*** ./src/engine/Physics.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Physics =
/*#__PURE__*/
function () {
  function Physics() {
    _classCallCheck(this, Physics);

    _defineProperty(this, "colliders", []);
  }

  _createClass(Physics, [{
    key: "setColliders",
    value: function setColliders(colliders) {
      this.colliders = colliders;
    }
  }, {
    key: "getColliders",
    value: function getColliders(player) {
      // TODO filter by player position
      return this.colliders;
    }
  }]);

  return Physics;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Physics());

/***/ }),

/***/ "z23c":
/*!***********************************************!*\
  !*** ./src/engine/physics/geometry/Circle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Circle = function Circle() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  _classCallCheck(this, Circle);

  this.x = x;
  this.y = y;
  this.radius = radius;
};



/***/ }),

/***/ "zm76":
/*!**************************!*\
  !*** ./src/react/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "/MKj");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/integration/react */ "KMx9");
/* harmony import */ var _MapEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapEditor */ "RPia");
/* harmony import */ var _Tileset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tileset */ "EXY2");
/* harmony import */ var _state_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state/store */ "IaF1");
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Tools */ "GdsF");
/* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Preview */ "T0Ow");
/* harmony import */ var _Inspector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Inspector */ "pnkl");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var _createStore = Object(_state_store__WEBPACK_IMPORTED_MODULE_5__["default"])(),
    _createStore2 = _slicedToArray(_createStore, 2),
    store = _createStore2[0],
    persistor = _createStore2[1];

function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var imagePath = './assets/tileset.png';
  var image = new Image();
  image.addEventListener('load', function () {
    setLoading(false);
  });
  image.src = imagePath;
  var tileset = {
    width: 48,
    height: 16,
    tileSize: 16,
    imagePath: imagePath,
    image: image
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_2__["PersistGate"], {
    persistor: persistor
  }, loading && 'loading...', !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MapEditor__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tileset: tileset
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tileset__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tileset: tileset
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tools__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Preview__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
}

/***/ })

},[["tjUo","runtime","vendor"]]]);
//# sourceMappingURL=main.5cd9ec37ab912ba9fb43.js.map