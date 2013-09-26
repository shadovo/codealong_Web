/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var createAnimal = function (name, legs, sound) {
    'use strict';
    var that = {};
    that.name = name;
    that.legs = legs;
    that.sound = sound;
    that.makeSound = function () {
        console.log("lalalala " + sound);
    };
    that.makeDance = function () {
        if (that.legs > 1) {
            console.log(that.name + " is dancing on his " + that.legs + " legs.");
        } else {
            console.log("I can't dance you fool!\nI dont have enough legs!");
        }
    };
    return that;
};
var createCat = function (name, sound, hairType) {
    'use strict';
    var that = createAnimal(name, 4, sound);
    that.hairType = hairType;
    return that;
};
var createSpider = function (name, sound) {
    'use strict';
    var that = createAnimal(name, 8, sound);
    that.makeWeb = function () {
        console.log('      \\_____|_____/ ');
        console.log('      /\\____|____/\\ ');
        console.log('     / /\\___|___/\\ \\ ');
        console.log('    / / /\\__|__/\\ \\ \\ ');
        console.log('   / / / /\\_|_/\\ \\ \\ \\ ');
        console.log('__/_/_/_/_/(8)\\_\\_\\_\\_\\__');
        console.log('  \\ \\ \\ \\ \\_O_/ / / / / ');
        console.log('   \\ \\ \\ \\/_|_\\/ / / / ');
        console.log('    \\ \\ \\/__|__\\/ / / ');
        console.log('     \\ \\/___|___\\/ / ');
        console.log('      \\/____|____\\/ ');
        console.log('      /     |     \\ ');
    };
    that.makeSound = function () {
        console.log("I dont like making sounds.....!");
    };
    return that;
};
var createTiger = function (name, numberOfStripes) {
    'use strict';
    var that = createCat(name, "RAAAWR!", "short hair");
    that.numberOfStripes = numberOfStripes;
    that.teeth = "Sharp!";
    that.killTom = function () {
        console.log(that.sound + " Yum yum, Tom tasted good " + that.sound);
    };
    return that;
};
var aFish = createAnimal("nemo", 0, "blubb blubb");
console.log(aFish);
//
var aCat = createCat("Buster", "Purrrrrr", "long hair");
console.log(aCat);
//
var aSpider = createSpider("impsy", "rooorooaaooororoo");
console.log(aSpider);
//
var aTiger = createTiger("hobbes", "raaawr!", 95);
console.log(aTiger);
//
//
//