/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// 1) Wait until the dom content is loaded using an event listener on the window object.
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var para = document.querySelector("p");
    // 2) Add an event listener to the window object that listens to all key strokes
    window.addEventListener("keydown", function (event) {
        console.log("keydown: " + event.keyCode);

        // 3) Write a switch statement in the above function that changes the text of the paragraph depending on the arrow keypressed.
        //  hint you need to look at the keyCode property 
        // 4) In the switch statement change the text of the paragraph to match the arrow key pressed
        // i.e. Arrow up "I'm moving up" etc.
        switch (event.keyCode) {
        case 40:
            para.innerText = "Going down!";
            break;
        case 39:
            para.innerText = "Going right!";
            break;
        case 38:
            para.innerText = "Going up!";
            break;
        case 37:
            para.innerText = "Going left!";
            break;
        }
    });
});
