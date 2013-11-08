/*jslint browser:true */
/*global $:false, spotify:false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    "use strict";
    var currentTrackId;

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
        spotify.loadTrack($("input").val(), function () {
            $("input").val("");

        });
    });

    setInterval(function () {
        spotify.getStatus(function (status) {
            if (currentTrackId !== status.track_id) {
                currentTrackId = status.track_id;
                spotify.getArtwork(function (url) {
                    $("img").attr("src", url);
                });
            }
            if (status.state === "playing") {
                $(".play").hide();
                $(".pause").show();
            } else {
                $(".pause").hide();
                $(".play").show();
            }
        });
    }, 500);
});
