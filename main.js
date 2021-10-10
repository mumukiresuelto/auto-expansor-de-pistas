// ==UserScript==
// @name         Mumuki - Autoexpansor de pistas
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script de Tampermonkey para auto expandir las pistas en https://mumuki.io de forma automática.
// @author       You
// @match        https://mumuki.io/central/exercises/*
// @icon         https://www.google.com/s2/favicons?domain=mumuki.io
// @grant        none
// ==/UserScript==

function expandir() {
    try {
        let expandido = document.querySelector(".hint-box").children[0].getAttribute("aria-expanded")
        if ((expandido == "false") || (expandido == null)) {
            document.querySelector(".text-info").click()
        }
    } catch (e) {}
}

expandir()
setInterval(function() {
    expandir()
}, 1000);
