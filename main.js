"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collectMapValues = collectMapValues;
exports.indexBy = indexBy;
exports.indexTo = indexTo;
exports.indexWith = indexWith;
exports.integers = integers;
exports.invert = invert;
exports.invertCollectionMap = invertCollectionMap;
exports.transformMapBy = transformMapBy;
exports.transformMapWith = transformMapWith;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 
 * @param {Object} valueMap 
 * An object containing key value pairs
 * @param {any -> any} transform 
 * a transform to be applied to every value, associating the new value with the existing key.
 * @returns 
 * A mapped object.
 */
function transformMapWith(valueMap, transform) {
  var g = {};

  for (var key in valueMap) {
    var value = valueMap[key];
    g[key] = transform(key, value);
  }

  return g;
}

function transformMapBy(v, _key) {
  var g = {};

  for (var key in v) {
    var v2 = v[key];
    g[key] = v[key][_key];
  }

  return g;
}

function collectMapValues(values) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var collected = {};

  var _loop = function _loop(key) {
    collected[key] = values.map(function (v) {
      return v[key] || defaultValue;
    });
  };

  for (var key in values[0]) {
    _loop(key);
  }

  return collected;
}

function indexTo(entry, value) {
  var n = {};

  var _iterator = _createForOfIteratorHelper(entry),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      n[key] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return n;
}

function indexBy(entries) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var n = {};

  var _iterator2 = _createForOfIteratorHelper(entries),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var entry = _step2.value;
      var value = entry && entry[key] || null;
      n[value] = entry;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return n;
}

function indexWith(keys) {
  var accessor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return 0;
  };
  var n = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    n[key] = accessor(key, i);
  }

  return n;
}

;

function invert(collection) {
  var map = {};

  for (var key in collection) {
    var value = collection[key];
    map[value] = key;
  }

  return map;
}

function invertCollectionMap(collectionMap) {
  var map = {};

  for (var _i = 0, _Object$entries = Object.entries(collectionMap); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
        index = _Object$entries$_i[0],
        keys = _Object$entries$_i[1];

    map = _objectSpread(_objectSpread({}, map), indexTo(keys, index));
  }

  return map;
}

function integers() {
  var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var k = [];

  for (var index = 0; index < max; index++) {
    k.push(index);
  }

  ;
  return k;
}
