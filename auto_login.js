// ==UserScript==
// @name         网站自动登录脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  auto login all the website
// @author       Richard-hk
// @license      MIT
// @match        https://www.tampermonkey.net/scripts.php
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // 获得网站的url
    let url = window.location.href
    console.log(url)
    // Your code here...
})();