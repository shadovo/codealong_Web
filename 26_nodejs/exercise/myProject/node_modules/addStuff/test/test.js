/*global console: false, require: false, module: false, exports: false */
var addStuff = require("../index.js");

var adder = function (test) {
    'use strict';
    test.equal(addStuff.adder(20), 30);
    test.equal(addStuff.adder(49), 79);
    test.done();
};

exports.adder = adder;
