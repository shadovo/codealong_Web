/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// 1) Wait until the dom content has loaded.
// 2) Collect the unordered list from the page.
// 3) Write a Loop that adds 15 list elements into the unordered list.
// Now the hard part
// 4) Change your code so when you click on a list item it alerts it's 
// index i.e. if I click on the first item alert(0) and the last item (14).
window.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var i, setClick, li,
        ul = document.querySelector("ul");
    setClick = function (li, i) {
        li.addEventListener("click", function () {
            alert(" You clicked on : " + i);
        }, false);
    };
    for (i = 0; i < 15; i = i + 1) {
        li = document.createElement("li");
        li.innerText = "this is index number : " + i;
        setClick(li, i);
        ul.appendChild(li);
    }
}, false);