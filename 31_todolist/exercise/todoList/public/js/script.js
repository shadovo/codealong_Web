/*jslint browser:true */
/*global db: false, $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
// Listen to the click event on the span with the id of button
// when you click on it retrieve the value from the input element and 
// add it to the unordered list as a "li" element 
$(function () {
    "use strict";
    var loadItems, displayItem,
        itemStore = db.webservice();
    displayItem = function (item) {
        var listItem = $("<li>"),
            itemSpan = $("<span>"),
            removeButton = $("<span>remove</span>");
        removeButton.addClass("remove");
        removeButton.click(function () {
            itemStore.del(item.id, function () {
                console.log("deleted");
                listItem.remove();
            });
            $("#itemName").focus();
        });
        itemSpan.text(item.text);
        listItem.append(itemSpan);
        listItem.append(removeButton);
        $("ul").append(listItem);
        $("#itemName").val("").focus();
    };
    loadItems = function () {
        itemStore.readAll(function (items) {
            var i;
            for (i = 0; i < items.length; i = i + 1) {
                displayItem(items[i]);
            }
        });
    };
    $("#button").click(function () {
        var item = {
            text: $("#itemName").val().trim()
        };
        if (item.text !== "") {
            itemStore.create(item, function (id) {
                item.id = id;
                displayItem(item);
            });
        }
    });
    loadItems();
});