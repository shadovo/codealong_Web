/*global console: false, require: false, module: false, exports: false */
var express = require("express"),
    app = express(),
    myItemStore = require("myItemStore"),
    version = "v1";

app.use(express.bodyParser());

app.get("/" + version + "/items", function (req, res) {
    'use strict';
    myItemStore.getAllItems(function (status, items) {
        if (status === 200) {
            res.json(200, items);
        } else {
            res.send(404, null);
        }
    });
});

app.get("/" + version + "/items/:id", function (req, res) {
    "use strict";
    myItemStore.getItem(req.params.id, function (status, item) {
        if (status === 200) {
            res.json(200, item);
        } else {
            res.send(404, null);
        }
    });
});

app.post("/" + version + "/items", function (req, res) {
    'use strict';
    myItemStore.addItem(req.body, function (status, id) {
        if (status === 201) {
            res.json(201, {
                id: id
            });
        } else if (status === 409) {
            res.send(409, null);
        }
    });
});

app.put("/" + version + "/items/:id", function (req, res) {
    'use strict';
    var id = req.params.id,
        item = req.body;
    myItemStore.updateItem(id, item, function (status, id) {
        if (status === 404) {
            myItemStore.addItem(item, function (status, id) {
                if (status === 201) {
                    res.send(200, {
                        id: id
                    });
                } else {
                    res.send(500);
                }
            });
        } else {
            res.json(200, {id: id});
        }
    });
});

app.del("/" + version + "/items/:id", function (req, res) {
    'use strict';
    var id = req.params.id;
    myItemStore.deleteItem(id, function (status) {
        res.send(status);
    });
});

app.listen(8001);
console.log("DynamicHTML server running on port 8001");
