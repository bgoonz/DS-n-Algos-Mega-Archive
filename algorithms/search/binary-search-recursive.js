(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../../util', '../sorting/quicksort'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../../util'), require('../sorting/quicksort'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.util, global.quicksort);
    global.binarySearchRecursive = mod.exports;
  }
})(this, function (exports, _util, _quicksort) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.binarySearch = binarySearch;


  function binarySearchRecursive(array, value, low, high) {
    var compareFn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _util.defaultCompare;

    if (low <= high) {
      var mid = Math.floor((low + high) / 2);
      var element = array[mid];
      if (compareFn(element, value) === _util.Compare.LESS_THAN) {
        return binarySearchRecursive(array, value, mid + 1, high, compareFn);
      }
      if (compareFn(element, value) === _util.Compare.BIGGER_THAN) {
        return binarySearchRecursive(array, value, low, mid - 1, compareFn);
      }
      return mid;
    }
    return _util.DOES_NOT_EXIST;
  }

  function binarySearch(array, value) {
    var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util.defaultCompare;

    var sortedArray = (0, _quicksort.quickSort)(array);
    var low = 0;
    var high = sortedArray.length - 1;
    return binarySearchRecursive(array, value, low, high, compareFn);
  }
});