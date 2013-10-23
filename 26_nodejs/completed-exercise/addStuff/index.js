/*global console: false, require: false, module: false, exports: false */
var currentNumber = 10;

function adder(num) {
    "use strict";
    currentNumber += num;
    return currentNumber;
}
module.exports = {
    adder: adder
};