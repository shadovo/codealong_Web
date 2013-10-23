/*global console: false, require: false, module: false, exports: false */
var currentNumber = 10;

function adder(i) {
    'use strict';
    currentNumber += i;
    return currentNumber;
}

module.exports = {
    adder: adder
};
