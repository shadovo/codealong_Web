/*jslint node: true */
/*global console: false, require: false, module: false, exports: false */

var spotify = require('spotify-node-applescript'),
    express = require("express"),
    app = express(),
    port = 8002,
    trackId = "spotify:track:0u2t042rL2xkbGPmwke0Vu";

// esg spotify:track:2fWIkIuEl5SyAtGOs2n4x9
// rh spotify:track:0u2t042rL2xkbGPmwke0Vu

app.use(express.json());

app.post("/loadTrack", function (req, res) {
    'use strict';
    trackId = req.body.track;
    spotify.playTrack(trackId, function () {
        spotify.pause(function () {
            console.log("Loaded");
            res.send(200, "Loaded");
        });
    });
});

app.post("/play", function (req, res) {
    'use strict';
    spotify.play(function () {
        console.log("Playing");
        res.send(200, "Playing");
    });
});

app.post("/pause", function (req, res) {
    'use strict';
    spotify.pause(function () {
        console.log("Paused");
        res.send(200, "Paused");
    });
});

app.get("/status", function (req, res) {
    'use strict';
    spotify.getState(function (err, state) {
        res.json(state);
    });
});

app.listen(port);
console.log("Server running on " + port);
