/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var spotify = {};
spotify.play = function (callback) {
    "use strict";
    $.ajax({
        url: '/play',
        type: 'post'
    }).done(function () {
        if (undefined !== callback) {
            callback();
        }
    });
};
spotify.pause = function (callback) {
    "use strict";
    $.ajax({
        url: '/pause',
        type: 'post'
    }).done(function () {
        if (undefined !== callback) {
            callback();
        }
    });
};
spotify.next = function (callback) {
    "use strict";
    $.ajax({
        url: '/next',
        type: 'post'
    }).done(function () {
        if (undefined !== callback) {
            callback();
        }
    });
};
spotify.previous = function (callback) {
    "use strict";
    $.ajax({
        url: '/previous',
        type: 'post'
    }).done(function () {
        if (undefined !== callback) {
            callback();
        }
    });
};
spotify.getTrackName = function (id, callback) {
    "use strict";
};

spotify.loadTrack = function (text, callback) {
    "use strict";
    $.ajax({
        url: 'http://ws.spotify.com/search/1/track.json?q=' + text
    }).done(function (data) {
        if (data.tracks.length > 0) {
            $.ajax({
                url: '/loadTrack',
                type: 'POST',
                data: JSON.stringify({
                    track: data.tracks[0].href
                }),
                contentType: "application/json"
            }).done(function () {
                callback();
                // }
            }).fail(function () {
                console.log("ERROR - loadTrack");
            });
        }
    });
};
spotify.getArtwork = function (callback) {
    "use strict";
    $.ajax({url: "/artwork"}).done(function (data) {
        callback(data.url);
    });
};

spotify.getStatus = function (callback) {
    'use strict';
    $.ajax({
        url: "/status"
    }).done(function (data) {
        callback(data);
    });
};
