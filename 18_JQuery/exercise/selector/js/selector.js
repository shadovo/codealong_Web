/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */

// Dom content ready
$(function () {
    'use strict';
    // Step 1. Get the css buttons to work.
    // Step 2. When you click on an image of a kittler toggle the green
    // class on the bottom div (the one with the text 'you clicked on').
    // Use the tree structure of the page to locate the div. You will need $(this), parent and children.
    // Step 3. When you click on either of the animals dressed as other animals change the 
    // text in the bottom div to have the value of the attribute alt of the image you clicked on.

    $("body input[name='toggleButton']").click(function () {
        $("#myDiv").toggle();
    });

    $("body input[name='addClass']").click(function () {
        $("#myDiv").addClass("red");
    });

    $("body input[name='removeClass']").click(function () {
        $("#myDiv").removeClass("red");
    });

    $("body input[name='toggleClass']").click(function () {
        $("#myDiv").toggleClass("red");
    });

    $(".crazyImage[alt*='kitler']").click(function () {
        $(this).siblings("div").toggleClass("green");
    });

    $(".crazyImage:not([alt*='kitler'])").click(function () {
        $(this).siblings("div").text("You clicked on : " + $(this).attr("alt"));
    });
});
