function addLinkToButton(buttonId, pageURL) {
    document.getElementById(buttonId).addEventListener("click", function () {
        window.location = pageURL;
    });
}

addLinkToButton("mainPageButton", "index.html");

addLinkToButton("invertebratesButton", "html/animalSections/invertebrates.html");
addLinkToButton("crustaceansButton", "html/animalSections/crustaceans.html");
addLinkToButton("fishButton", "html/animalSections/fish.html");
addLinkToButton("sharksButton", "html/animalSections/sharks.html");
addLinkToButton("reptilesButton", "html/animalSections/reptiles.html");
addLinkToButton("mammalsButton", "html/animalSections/mammals.html");

addLinkToButton("loginButton", "html/userControl/login.html");
addLinkToButton("registerButton", "html/userControl/registration.html");
