"use strict";

function addLinkToButton(buttonId, pageURL) {
    document.getElementById(buttonId).addEventListener("click", function () {
        window.location = pageURL;
    });
}

addLinkToButton("mainPageButton", "/index.html");

addLinkToButton("invertebratesButton", "/html/animalSections/invertebrates.html");

addLinkToButton("loginButton", "/html/userControl/login.html");
addLinkToButton("registerButton", "/html/userControl/registration.html");
