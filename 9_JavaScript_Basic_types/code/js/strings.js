/*jslint browser:true*/
/*global alert: false, prompt: false, confirm: false, console: false, Debug: false, opera: false,*/
console.log("strings");
var textString = "text";
console.log(textString);
textString = textString.toUpperCase();
console.log(textString);
console.log(textString[0]);
var lazyCat = "    The cat sat on the mat.";
console.log(lazyCat);
lazyCat = lazyCat.trim();
console.log(lazyCat);
console.log(lazyCat.length);
console.log(lazyCat.substr(4, 3));
console.log(lazyCat.substring(4, 7));
console.log(lazyCat.indexOf("a", 6));
console.log(lazyCat.indexOf("z", 6));