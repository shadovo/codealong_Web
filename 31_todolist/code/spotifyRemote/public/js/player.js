/*jslint browser:true */
/*global $:false, spotify:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    "use strict";
    $(".play").click(function () {
        spotify.play();
    });
    $(".pause").click(function () {
        spotify.pause();
    });
    $(".next").click(function () {
        spotify.next();
    });
    $(".previous").click(function () {
        spotify.previous();
    });
    $("span").click(function () {
        spotify.loadTrack($("input").val());
    });
    setInterval(function () {
        spotify.getStatus(function (status) {
            if (status.state === "playing") {
                $(".play").hide();
                $(".pause").show();
            } else {
                $(".play").show();
                $(".pause").hide();
            }
            spotify.getArtwork(function (url) {
                $("img").attr("src", url);
            });
        });
    }, 1000);
});