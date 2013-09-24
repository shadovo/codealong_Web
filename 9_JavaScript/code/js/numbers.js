/*jslint browser:true*/
/*global alert: false, prompt: false, confirm: false, console: false, Debug: false, opera: false,*/
console.log("numbers");
var decimal = 10;
console.log(decimal);
var octal = 010;
console.log(octal);
var hex = 0xBADA55;
console.log(hex);
var notANumber = Number("Hello");
console.log(notANumber); // NaN, still type number tho.
console.log(typeof notANumber);
console.log(isNaN(notANumber));
console.log(parseInt("10kg", 10));
console.log(Math.ceil(10.1));
console.log(Math.floor(10.1));
console.log(Math.round(10.1));
console.log(Math.random());
console.log(Math.floor(Math.random() * 5));