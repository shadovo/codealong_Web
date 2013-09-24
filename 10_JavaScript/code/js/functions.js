/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("functions");

function add(a, b) {
    'use strict';
    var result = a + b;
    return result;
}

function minus() {
    'use strict';
    console.log(arguments);
    var i,
        result = 0;
    for (i = 0; i < arguments.length; i += 1) {
        result -= arguments[i];
    }
    return result;
}

function calculatePlusOne(a, b, func) {
    'use strict';
    return func(a, b) + 1;
}