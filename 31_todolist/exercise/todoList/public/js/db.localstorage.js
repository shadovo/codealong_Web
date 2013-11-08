/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
db.localStorage = function () {
    "use strict";
    var items = (localStorage.items === undefined) ? [] : JSON.parse(localStorage.items),
        lastId = (localStorage.lastId === undefined) ? 0 : Number(localStorage.lastId);

    function updateLocalStorage() {
        localStorage.items = JSON.stringify(items);
        localStorage.lastId = lastId;
    }

    function create(obj, callback) {
        lastId = lastId + 1;
        obj.id = lastId;
        items.push(obj);
        updateLocalStorage();
        callback(lastId);
    }

    function read(id, callback) {
        var i = 0,
            item = null;
        for (i = 0; i < items.length; i = i + 1) {
            if (items[i].id === id) {
                item = items[i];
            }
        }
        callback(item);
    }

    function readAll(callback) {
        callback(items);
    }

    function update(id, obj, callback) {
        var i, objectIndex;
        obj.id = id;
        for (i = 0; i < items.length; i = i + 1) {
            if (items[i].id === id) {
                objectIndex = i;
            }
        }
        if (objectIndex !== undefined) {
            items[objectIndex] = obj;
        } else {
            if (id > lastId) {
                lastId = id;
            }
            items.push(obj);
        }
        updateLocalStorage();
        callback();
    }

    function del(id, callback) {
        var i;
        for (i = 0; i < items.length; i = i + 1) {
            if (items[i].id === id) {
                items.splice(i, 1);
            }
        }
        updateLocalStorage();
        callback();
    }
    return {
        create: create,
        readAll: readAll,
        update: update,
        read: read,
        del: del
    };
};