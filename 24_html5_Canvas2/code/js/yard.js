/*jslint browser:true */
/*global requestAnimationFrame: false, createAnimal: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

document.addEventListener("DOMContentLoaded", function () {
    'use strict';
    var canvas = document.querySelector("canvas"),
        ctx = canvas.getContext("2d"),
        myDog = createAnimal();
    canvas.width = 800;
    canvas.height = 600;

    myDog.x = canvas.width / 2;
    myDog.y = canvas.height / 2;

    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(myDog.canvas, 50, 50);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(myDog.canvas, myDog.x, myDog.y);
        requestAnimationFrame(animate);
    }
    animate();

    function moveDog() {
        var distance = 10;
        switch (myDog.getDirection()) {
        case "n":
            myDog.y = myDog.y > 0 ? myDog.y - distance : 0;
            break;
        case "s":
            myDog.y = myDog.y < (canvas.height - myDog.canvas.height) ? myDog.y + distance : canvas.height - myDog.canvas.height;
            break;
        case "e":
            myDog.x = myDog.x < (canvas.width - myDog.canvas.width) ? myDog.x + distance : canvas.width - myDog.canvas.width;
            break;
        case "w":
            myDog.x = myDog.x > 0 ? myDog.x - distance : 0;
            break;
        }

    }
    var myInterval = setInterval(moveDog, 1);
});
