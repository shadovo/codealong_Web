/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var createAnimal = function () {
    "use strict";
    var canvas = document.createElement("canvas"),
        ctx = canvas.getContext("2d"),
        spriteImage = document.createElement("img"),
        direction = "e",
        animationFrame = 0;
    canvas.width = 32;
    canvas.height = 32;
    spriteImage.src = "sprites/galleryanimals.png";
    spriteImage.onload = function () {
        ctx.drawImage(spriteImage, -32 * 5, -32 * 4);
    };

    function animate() {
        var yPosition = 0,
            tempFrame;
        switch (direction) {
        case "n":
            yPosition = -96;
            break;
        case "s":
            yPosition = 0;
            break;
        case "e":
            yPosition = -64;
            break;
        case "w":
            yPosition = -32;
            break;
        }
        if (animationFrame === 3) {
            animationFrame = 0;
        } else {
            animationFrame += 1;
        }
        tempFrame = animationFrame === 3 ? 1 : animationFrame;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(spriteImage, -32 * tempFrame, yPosition);
        // setTimeout(animate, 100);
        requestAnimationFrame(animate);
    }
    animate();
    document.addEventListener("keydown", function (e) {
        switch (e.keyIdentifier) {
        case "Right":
            direction = "e";
            break;
        case "Left":
            direction = "w";
            break;
        case "Up":
            direction = "n";
            break;
        case "Down":
            direction = "s";
            break;
        }
    });
    return {
        canvas: canvas,
        getDirection: function () {
            return direction;
        }
    };
};
