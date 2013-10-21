/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var canvas = document.querySelector("canvas"),
        ctx = canvas.getContext("2d");
    // ctx.beginPath();

    // Line
    ctx.lineWidth = 7;
    ctx.strokeStyle = "blue";
    ctx.moveTo(20, 20);
    ctx.lineTo(40, 40);
    ctx.stroke();
    //
    /*
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 51, 51);

    ctx.beginPath();
    ctx.arc(150, 50, 30, 0, Math.PI * 2, true);

    ctx.fill();
    */
});
