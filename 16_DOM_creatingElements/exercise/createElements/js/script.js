/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// 1) Wait until the dom content has loaded.
// 2) Collect the unordered list from the page.
// 3) Write a Loop that adds 15 list elements into the unordered list.
// Now the hard part
// 4) Change your code so when you click on a list item it alerts it's 
// index i.e. if I click on the first item alert(0) and the last item (14).

document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var ul = document.querySelector('ul'),
        i;
    function createLi(index) {
        var li = document.createElement('li');
        li.innerHTML = index;
        li.onclick = function () {
            alert(index);
        };
        ul.appendChild(li);
    }

    for (i = 0; i < 15; i += 1) {
        createLi(i);
    }
});



