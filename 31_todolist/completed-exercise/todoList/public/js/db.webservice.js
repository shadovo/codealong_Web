/*jslint browser:true */
/*global db: false, $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
db.webservice = function () {
    "use strict";

    function create(obj, callback) {
        $.ajax({
            url: "/items",
            type: "post",
            data: JSON.stringify(obj),
            contentType: "application/json"
        }).done(function (data) {
            callback(data.id);
        });
    }

    function read(id, callback) {
        $.ajax({
            url: "/items/" + id
        }).done(function (items) {
            callback(items);
        });
    }

    function readAll(callback) {
        $.ajax({
            url: "/items"
        }).done(function (items) {
            callback(items);
        });
    }

    function update(id, obj, callback) {
        $.ajax({
            url: "/items/" + id,
            type: "put",
            data: JSON.stringify(obj),
            contentType: "application/json"
        }).done(function () {
            callback();
        });
    }

    function del(id, callback) {
        $.ajax({
            url: "/items/" + id,
            type: "delete"
        }).done(function () {
            callback();
        });
    }
    return {
        create: create,
        readAll: readAll,
        update: update,
        read: read,
        del: del
    };
};