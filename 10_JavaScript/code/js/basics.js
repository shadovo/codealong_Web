/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var a = 10,
    b = 4,
    i = 0,
    property;
if (a > b) {
    console.log("if");
} else if (a > i) {
    console.log("else if 1");
} else {
    console.log("else");
}
while (i < 3) {
    console.log(i);
    i += 1;
}
i = 0;
do {
    console.log(i);
    i += 1;
} while (i < 5);
for (i = 0; i < 5; i += 1) {
    console.log(i);
}

function afunc(val) {
    'use strict';
    switch (typeof val) {
    case "number":
        console.log("Num");
        break;
    case "string":
        console.log("Str");
        break;
    default:
        console.log("NaN, NaS");
    }
}