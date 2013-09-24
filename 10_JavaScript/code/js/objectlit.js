/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
console.log("object literals");
var volvo = {
    "reg_number": "RDA 388",
    "color": "red",
    "wheels": {
        "number": 4,
        "rims": '16"'
    }
};
var key;
for (key in volvo) {
    if (volvo.hasOwnProperty(key)) {
        console.log(volvo[key]);
    }
}