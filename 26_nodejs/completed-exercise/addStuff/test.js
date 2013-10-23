/*global console: false, require: false, module: false, exports: false */
var addStuff = require("./index.js");
module.exports = {
    adder: function (test) {
        "use strict";
        test.equals(addStuff.adder(20), 30);
        test.equals(addStuff.adder(49), 79);
        test.done();
    }
};