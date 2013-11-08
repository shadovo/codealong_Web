/*global console: false, require: false, module: false, exports: false */
var listItems = require("memoryDb"),
    express = require("express"),
    app = express();
listItems.create({
    "test": "Tom"
});
app.use(express.json());
//get http://localhost:8001/items
//Returns the list items array
app.get("/items", function (req, res) {
    "use strict";
    res.send(200, "getting list");
    //Step 1 
    // Delete the res.send above
    //Use res.json() to return all items in the listItems memoryDb
    //Test that your code works in the advanced rest client in chrome
});
//post http://localhost:8001/items
//Adds an item to the items array
app.post("/items", function (req, res) {
    "use strict";
    var item = req.body; // The item sent from the client is req.body
    res.json(item);
    // Step 2 
    // Add the item that the client sent to the listItems memoryDb, save the id
    // of the item to a variable. 
    // Return status code 201 and the id of the new item.
    //Test that your code works in the advanced rest client
});
//get http://localhost:8001/items/1
//Returns the item with an id of 1
app.get("/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id);
    res.json(200, {
        message: "Fetching item " + id
    });
    // Step 3
    // Create a variable item and populate it with the listItem
    // with the id that was in the url.
    // Write an if statement checking if the item is null
    // if it is null return status code 404 with res.send() function
    // if it is not null return the item with res.json() 
    //Test that your code works in the advanced rest client
});
//put http://localhost:8001/items/1
//Updates or creates an item with an id of 1
app.put("/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id), // The id of the object to work with
        item = req.body; // The item sent from the client
    res.json(200, {
        message: "Updating item " + id
    });
    // Step 4
    // Update the item in listItems with the given id with the item
    // the user sent. 
    // Respond with a status code 200.
    // 
    // Advanced/Optional 
    // Can you think how you could change the code so you return
    // status code 201 when if the item was created and 200
    // if it was updated 
    //Test that your code works in the advanced rest client
});
//del http://localhost:8001/items/1
//Deletes the item with an id of 1
app.del("/items/:id", function (req, res) {
    "use strict";
    var id = Number(req.params.id);
    listItems.del(id);
    res.json(200, {
        message: "Deleting item " + id
    });
    // Step 5
    // Delete the item from listItems memoryDb with the given id.
    // return a status code of 200.
    //Test that your code works in the advanced rest client
});
app.listen(8001);
console.log("Server started on port 8001");