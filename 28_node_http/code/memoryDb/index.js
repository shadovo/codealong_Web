/*global console: false, require: false, module: false, exports: false */
var items = [],
    lastId = 0;

function create(obj) {
    "use strict";
    lastId = lastId + 1;
    obj.id = lastId;
    items.push(obj);
    return lastId;
}

function read(id) {
    "use strict";
    var i = 0;
    for (i = 0; i < items.length; i = i + 1) {
        if (items[i].id === id) {
            return items[i];
        }
    }
    return null;
}

function readAll() {
    "use strict";
    return items;
}

function update(id, obj) {
    "use strict";
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
}

function del(id) {
    "use strict";
    var i;
    for (i = 0; i < items.length; i = i + 1) {
        if (items[i].id === id) {
            items.splice(i, 1);
        }
    }
}
module.exports = {
    create: create,
    read: read,
    readAll: readAll,
    update: update,
    del: del
};