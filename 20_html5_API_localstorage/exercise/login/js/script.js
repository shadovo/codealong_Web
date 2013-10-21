/*jslint browser:true */
/*global $: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
$(function () {
    'use strict';
    // 1) Using two localStorage variables save the username
    // and password when you click on loginButton
    $("#loginButton").click(function () {
        localStorage.username = $("#username").val();
        localStorage.password = $("#password").val();
        // 2) Also hide the login div and show the welcome div.
        $("#login").hide();
        $(".user").text(localStorage.username);
        $("#welcome").show();
    });
    // 3) Collect the username from localstorage and display it in the user span
    // Check that it works using chrome dev tools -- resources tab
    // Delete the localstorage using dev tools
    // 4) Make it so that if you haven't already visited
    // the site you hide the welcome div and show the login div
    // when the page loads
    if (undefined === localStorage.username) {
        $("#welcome").hide();
        $("#login").show();
    } else {
        $("#login").hide();
        $(".user").text(localStorage.username);
        $("#welcome").show();
    }
    // If you have already logged in hide the login div and
    // show the welcome div with the users name dispalyed in the span
});
