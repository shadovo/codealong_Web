/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

// var cats = [];

$(function () {
    'use strict';
    var totalPrice = 0,
        cats = [],
        prices = [],
        names = [],
        locations = [];

    $("#item_list").children().each(function () {
        var desc = $(this).children(".desc"),
            price = 0,
            name,
            location;

        if (desc.children(".cat_geo").text().indexOf("Djur") !== -1) {
            name = desc.children(".item_link").text();
            names.push(name);
            price = Number(desc.children(".list_price").text().replace(/[^0-9]/g, ''));
            prices.push(price);
            totalPrice += price;
            location = desc.children(".cat_geo").children(".list_area").children("a").text();
            locations.push(location);
            //
            // Optional stuff
            cats.push({
                name: name,
                price: price,
                location: location
            });
            console.group(name);
            console.log(price);
            console.log(location);
            console.groupEnd();
            //
        }
    });
    console.log(cats);
    console.log(names);
    console.log(prices);
    console.log(locations);
    console.log("TOTAL PRICE: " + totalPrice);
});
