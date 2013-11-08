/*global spotify:false, console: false, require: false, module: false, exports: false */
var spotify = require('spotify-node-applescript'),
    express = require("express"),
    app = express();
app.use(express.json());
app.use(express.static("./public"));
app.use("/spotifyImages", express.static("/Users/tablackmore/Library/Caches/TemporaryItems/"));
app.post("/loadTrack", function (req, res) {
    spotify.playTrack(req.body.track, function () {
        res.send(200, "loaded");
    });
});
app.post("/play", function (req, res) {
    spotify.play(function () {
        res.send(200, "playing");
    });
});
app.post("/pause", function (req, res) {
    spotify.pause(function () {
        res.send(200, "paused");
    });
});
app.post("/next", function (req, res) {
    spotify.next(function () {
        res.send(200, "next");
    });
});
app.post("/previous", function (req, res) {
    spotify.previous(function () {
        res.send(200, "next");
    });
});
app.get("/artwork", function (req, res) {
    spotify.getArtwork(function (err, artworkPath) {
        if (err === undefined && typeof artworkPath === "string") {
            artworkPath = "spotifyImages/" + artworkPath.split("/")[artworkPath.split("/").length - 1];
            res.json(200, {
                url: artworkPath
            });
        } else {
            res.json(200, {
                url: ""
            });
        }
    });
});
app.get("/status", function (req, res) {
    "use strict";
    spotify.getState(function (err, state) {
        if (err === null) {
            res.json(state);
        } else {
            res.json(undefined);
        }
    });
});
app.listen(8011);
console.log("Spotify remote service started on port 8011");