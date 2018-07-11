// ==UserScript==
// @name         Auto Complete Updates
// @namespace    http://advance.lexis.com/
// @version      0.1
// @description  updates to style and functionality of auto suggest
// @author       Mac
// @match        https://*advance.lexis.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';

    waitForKeyElements("aside.wordwheel", initWW, false);

    function initWW() {
        /* Code to add / remove items from WW here */

    }

    /* Make Legal Phrases auto submit */
    $(document).on("click","#legal.wordwheelSection",function() {
         $('#mainSearch').click();
    });


    /* STYLE OVERRIDES - CAN BE MOVED TO EXTERNAL CSS FILE IF EASIER */
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }


    addGlobalStyle('.popup.wordwheel #document li a, .popup.wordwheel #legalquestions li a, .popup.wordwheel #source a.uslinks {color: initial;}');
    addGlobalStyle('.popup.wordwheel,.popup.wordwheel>section{padding-left:0!important;margin-left:0!important}.popup.wordwheel>section{display:block!important}.popup.wordwheel section>h2{width:100%!important;margin-left:0!important;text-align:left!important;border-right:none!important}.wordwheelSection .wordwheelButton{display:none!important}');
    addGlobalStyle('.popup.wordwheel h2 { background: none !important; color: #ed1c24; font-weight: 400; font-size: 1.2em; padding: 15px; min-width: 75px; border-bottom: solid 1px #e9e9ea !important; line-height: 0.4em;}');
    addGlobalStyle('.popup.wordwheel .citation, .popup.wordwheel h2, .popup.wordwheel ul {border-top: none !important;}');
    addGlobalStyle('.popup.wordwheel #legal.wordwheelSection ul li:nth-of-type(1n+4) {display: none;}');
    addGlobalStyle('.popup.wordwheel #source.wordwheelSection ul li:nth-of-type(1n+4) {display: none;}');
    addGlobalStyle('.popup.wordwheel #document.wordwheelSection ul li:nth-of-type(1n+4) {display: none;}');

})();