// ==UserScript==
// @name         Windy.com Premium Watermark Remover
// @namespace    https://github.com/djzhao627
// @version      1.0
// @description  Remove the premium watermark in weather forcast
// @author       djhzao
// @match        https://www.windy.com/*
// @icon         none
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Select the element containing the watermark using its CSS class
    const style = document.createElement('style');
    style.innerHTML = `
        .get-premium--ribbon {
            display: none !important;
        }
    `;
    document.head.appendChild(style);
})();
