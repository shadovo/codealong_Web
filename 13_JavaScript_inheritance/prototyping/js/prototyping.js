/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var Animal = function (name, legs, sound) {
    'use strict';
    this.name = name;
    this.legs = legs;
    this.sound = sound;
};
Animal.prototype.makeSound = function () {
    'use strict';
    console.log(this.sound + " I love saying " + this.sound);
};
Animal.prototype.sayHello = function () {
    'use strict';
    console.log(this.name + " says hello!");
};
//
//
var Dog = function (name, color) {
    'use strict';
    Animal.call(this, name, 4, "Woof woof!");
    this.color = color;
};
Dog.prototype = new Animal();
//
//
Object.prototype.sayHello = function () {
    'use strict';
    alert("Hello");
};
//
//
var Centipede = function (name) {
    'use strict';
    Animal.call(this, name, 1000, "Squeeeeee!");
    this.tapdance = function () {
        var i;
        console.log("Watch me tapdance!");
        for (i = 0; i < 1000; i += 1) {
            console.log("Tap");
        }
        console.log("TadDa!");
    };
};

var aFish = new Animal("Nemo", 0, "Blobb blobb blobb");
var aDog = new Dog("Lassie", "brown / white");
var aCentipede = new Centipede("Charles");
//
//
// var prop;
// for (prop in aDog) {
//     if (aDog.hasOwnProperty(prop)) {
//         console.log(prop + " : " + aDog[prop]);
//     }
// }
// var array = [1, 2, 4];
// for (prop in array) {
//     if (array.hasOwnProperty(prop)) {
//         console.log(prop + " : " + array[prop]);
//     }
// }