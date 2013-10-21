/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    "use strict";
    var loadItems, updateItems, displayItem, items;
    displayItem = function (itemText) {
        var listItem = $("<li>"),
            itemSpan = $("<span>"),
            removeButton = $("<span>remove</span>");
        removeButton.addClass("remove");
        removeButton.click(function () {
            listItem.remove();
            updateItems();
            $("#itemName").focus();
        });
        itemSpan.text(itemText);
        listItem.append(itemSpan);
        listItem.append(removeButton);
        $("ul").append(listItem);
        $("#itemName").val("").focus();
    };
    loadItems = function () {
        // 1) use a loop and the displayItem function to
        // show all the items in the items array
        if (undefined === localStorage.items) {
            items = [];
        } else {
            items = JSON.parse(localStorage.items);
        }
        console.log("Loading Items");
        var i, len;
        for (i = 0, len = items.length; i < len; i += 1) {
            displayItem(items[i]);
        }
    };
    updateItems = function () {
        // 3) reset the items array to an empty array
        // loop through all the li's in the ul
        // and push the text they contain into the items array
        // Note the text you want is the first child of the li.
        // console log out your array to make sure it works
        console.log("updating items", items);
        items = [];
        $("li").each(function () {
            items.push($(this).children(":first").text());
        });
        localStorage.items = JSON.stringify(items);
        console.log("items updated ", items);
    };
    $("#button").click(function () {
        var itemText = $("#itemName").val();
        itemText = $.trim(itemText);
        if (itemText !== "") {
            displayItem(itemText);
            updateItems();
        }
    });
    // 2) execute the loadItems function here so
    // it is triggered when the page loads for the
    // first time
    loadItems();
});
