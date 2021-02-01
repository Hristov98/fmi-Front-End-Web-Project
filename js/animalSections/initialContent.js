"use strict";

var cookies = document.cookie.split(";");

for (let i = 0; i < cookies.length; i++) {
    if (cookies[i].includes("selectedSection")) {
        let equalIndex = cookies[i].indexOf("=");

        let category =
            equalIndex > -1 ? cookies[i].substr(equalIndex + 1, cookies[i].length) : cookies[i];
        addEntriesByCategory(category);
        setButtonHighlightBasedOnCategory(category);
    }
}

function setButtonHighlightBasedOnCategory(category) {
    switch (category) {
        case "Invertebrate": {
            setButtonHighlight("invertebratesButton");
            break;
        }
        case "Crustacean": {
            setButtonHighlight("crustaceansButton");
            break;
        }
        case "Ocean Fish": {
            setButtonHighlight("fishButton");
            break;
        }
        case "Shark": {
            setButtonHighlight("sharksButton");
            break;
        }
        case "Reptile": {
            setButtonHighlight("reptilesButton");
            break;
        }
        case "Mammal": {
            setButtonHighlight("mammalsButton");
            break;
        }
    }
}

function setButtonHighlight(buttonId) {
    document.getElementById(buttonId).style.color = "white";
    document.getElementById(buttonId).style.backgroundColor = "#2c328bbe";
    document.getElementById(buttonId).style.border = "0.1rem solid white";

    document.getElementById(buttonId).classList = "selected";
}
