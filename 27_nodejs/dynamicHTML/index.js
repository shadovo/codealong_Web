/*global console: false, require: false, module: false, exports: false */
var express = require("express"),
    app = express(),
    port = 8080,
    books = {
        123412341234: {
            author: "Tom Blackmore",
            title: "The many cats of the web.",
            description: "A book about cats, in fact the best book ever.",
            isbn: "123412341234"
        },
        123412341235: {
            author: "Tom Blackmore",
            title: "The many cats of the web 2.",
            description: "A book about cats, in fact the 2nd best book ever.",
            isbn: "123412341235"
        }
    };

app.get("/", function (req, res) {
    'use strict';
    res.send("Hello World!");
});


app.get("/books/:isbn", function (req, res) {
    'use strict';
    var book = books[req.params.isbn],
        html = "<!DOCTYPE html>\n";
    if (undefined !== book) {
        html += "<html>\n";
        html += "<head>\n";
        html += "<title>" + book.title + "</title>\n";
        html += "</head>\n";
        html += "<body>\n";
        html += "<h1>" + book.title + "</h1>\n";
        html += "<h2>" + book.author + "</h2>\n";
        html += "<p>" + book.description + "</p>\n";
        html += "</boody>\n";
        html += "</html>\n";
        res.send(html, 200, {
            "content-type": "text/html"
        });
    } else {
        res.send("Not found", 404, {'content-type': "text/plain"});
    }
});

app.listen(port);
console.log("DynamicHTML server running on port " + port);
