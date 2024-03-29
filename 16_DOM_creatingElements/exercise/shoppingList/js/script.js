/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var ul = document.querySelector("ul"),
        button = document.querySelector("#button"),
        itemName = document.querySelector("#itemName");

    // Listen to the click event on the span with the id of button
    // when you click on it retrieve the value from the input element and 
    // add it to the unordered list as a "li" element 

    button.onclick = function () {
        var newLi = document.createElement("li");
        newLi.innerHTML = itemName.value;
        ul.appendChild(newLi);
        itemName.value = "";
    };

}, false);
