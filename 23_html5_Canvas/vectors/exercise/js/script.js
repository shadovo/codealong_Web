/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var colors = document.querySelectorAll("td"),
        range = document.querySelector("input"),
        saveButton = document.querySelector('#save'),
        loadButton = document.querySelector("#load"),
        canvas = document.querySelector("canvas"),
        ctx = canvas.getContext('2d'),
        // Step 2
        // Create a variable called drawing set it to false
        drawing = false,
        i;

    canvas.width = 500;
    canvas.height = 500;

    function drawHouse() {
        // roof
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.moveTo(200, 230);
        ctx.moveTo(300, 230);
        ctx.lineTo(250, 170);
        ctx.lineTo(200, 230);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        //wall
        ctx.beginPath();
        ctx.moveTo(200, 230);
        ctx.lineTo(200, 300);
        ctx.lineTo(300, 300);
        ctx.lineTo(300, 230);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.stroke();
        ctx.fill();
        //door
        ctx.beginPath();
        ctx.moveTo(230, 300);
        ctx.lineTo(230, 260);
        ctx.lineTo(250, 260);
        ctx.lineTo(250, 300);
        ctx.closePath();
        ctx.fillStyle = "white";
        ctx.stroke();
        ctx.fill();
        // window
        ctx.beginPath();
        ctx.moveTo(260, 260);
        ctx.lineTo(290, 260);
        ctx.lineTo(290, 280);
        ctx.lineTo(260, 280);
        ctx.closePath();
        ctx.fillStyle = "blue";
        ctx.stroke();
        ctx.fill();
    }
    // Step 1 continue drawing
    // Can you draw a house?
    ctx.stroke();
    canvas.addEventListener("mousedown", function (e) {
        // console.log("mousedown", e.offsetX, e.offsetY);
        // Step 3
        // a) using the moveTo function move the pen to where the user clicked
        // b) set the variable drawing to true
        ctx.moveTo(e.offsetX, e.offsetY);
        drawing = true;
        ctx.beginPath();
    }, false);
    canvas.addEventListener("mousemove", function (e) {
        // console.log("mousemove", e.offsetX, e.offsetY);
        // Step 4
        // if the drawing variable is true draw a line to the current point with
        // lineTo, call the stroke command to visualise the line too.
        if (drawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }

    }, false);
    canvas.addEventListener("mouseup", function (e) {
        console.log("mouseup", e.offsetX, e.offsetY);
        // Step 5
        // Set the drawing variable to false
        drawing = false;
        ctx.closePath();
    }, false);

    function setColorClick(button) {
        ctx.strokeStyle = button.target.className;
    }

    // Step 6 can you wire up the table with colors so you can change color?
    for (i = 0; i < colors.length; i += 1) {
        colors[i].onclick = setColorClick;
    }
    // Step 7 can you add a html control
    range.onchange = function () {
        ctx.lineWidth = range.value;
    };

    saveButton.onclick = function () {
        var fileAsData;
        fileAsData = canvas.toDataURL("image/png");
        localStorage.image = JSON.stringify(fileAsData);
    };

    loadButton.onclick = function () {
        var image = new Image();
        image.src = JSON.parse(localStorage.image);
        image.onload = function () {
            ctx.drawImage(image, 0, 0);
        };
    };

    drawHouse();
});
