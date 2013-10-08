/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var $ = function (input) {
    'use strict';
    var domElement,
        that = {};
    if (typeof input === 'function') {
        window.addEventListener("DOMContentLoaded", input);
    } else if (typeof input === 'string') {
        domElement = document.querySelector(input);
        that.show = function () {
            domElement.style.display = 'block';
            return that;
        };
        that.hide = function () {
            domElement.style.display = "none";
            return that;
        };
        that.toggle = function () {
            if (domElement.style.display === 'none') {
                that.show();
            } else {
                that.hide();
            }
            return that;
        };
        that.click = function (func) {
            domElement.addEventListener('click', func);
            return that;
        };
        return that;
    }
};
