/*jslint browser:true */
/*global db: false, $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
db.webservice = function () {
    "use strict";
    // post the object to /items url and then call the callback

    function displayError() {
        alert("ERROR!!!!");
    }

    function create(obj, callback) {
        $.ajax({
            url: "/items",
            type: "post",
            data: JSON.stringify(obj),
            contentType: "application/json"
        }).done(function (data) {
            callback(data);
        }).fail(displayError);
    }
    // method get
    // url /items/id

    function read(id, callback) {
        $.ajax({
            url: "/items/" + id
        }).done(function (data) {

            callback(JSON.parse(data));
        }).fail(displayError);
    }
    // retreive all items and pass them to the callback
    // method get
    // url /items

    function readAll(callback) {
        $.ajax({
            url: "/items"
        }).done(function (data) {
            callback(data);
        }).fail(displayError);
    }
    // method put
    // url /items/id

    function update(id, obj, callback) {
        $.ajax({
            url: "/items/" + id,
            type: "put",
            data: JSON.stringify(obj)
        }).done(function (data) {
            callback(data);
        }).fail(displayError);
    }
    // method put
    // url /items/id

    function del(id, callback) {
        $.ajax({
            url: "/items/" + id,
            type: "delete"
        }).done(function (data) {
            callback(data);
        }).fail(displayError);
    }
    return {
        create: create,
        readAll: readAll,
        update: update,
        read: read,
        del: del
    };
};
