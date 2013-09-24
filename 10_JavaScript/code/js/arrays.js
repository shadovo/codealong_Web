/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("arrays");
var anArray = [1, 3, 5, 7, 8, "hello",
    function () {
        'use strict';
        console.log("Hej");
    }
];
console.log(anArray.push(13));
console.log(anArray.unshift("tom"));
console.log(anArray.pop());
console.log(anArray.shift());
var i;
for (i = 0; i < anArray.length; i += 1) {
    console.log(anArray[i]);
}
anArray.forEach(function (element) {
    'use strict';
    console.log("Yay " + element);
});