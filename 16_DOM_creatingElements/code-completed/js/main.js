/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    console.log("DOM loaded");
    var body = document.querySelector("body"),
        h1 = document.createElement("h1"),
        p = document.createElement("p"),
        a = document.createElement("a");
    h1.innerText = "Wow";
    p.innerText = "What a great page. To find other pages ";
    a.innerText = "click here"; // <a>click here</a>
    a.setAttribute("href", "http://google.com"); // <a href="http://google.com">click here</a>
    p.appendChild(a); // <p>What a great page. To find other pages <a href="http://google.com">click here</a></p>
    // Add to our page
    body.appendChild(h1); // Add h1 to the end of body
    body.appendChild(p); // Add p to the end of body
});