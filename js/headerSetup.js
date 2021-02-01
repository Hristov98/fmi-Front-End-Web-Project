"use strict";

function addLinkToButton(buttonId, pageURL) {
    document.getElementById(buttonId).addEventListener("click", function () {
        window.location = pageURL;
    });
}

addLinkToButton("mainPageButton", "http://127.0.0.1:5500/index.html");

addLinkToButton("invertebratesButton", "http://127.0.0.1:5500/html/animalSections/invertebrates.html");

addLinkToButton("loginButton", "http://127.0.0.1:5500/html/userControl/login.html");
addLinkToButton("registerButton", "http://127.0.0.1:5500/html/userControl/registration.html");
