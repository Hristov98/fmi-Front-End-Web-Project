"use strict";

function addLinkToButton(buttonId, pageURL) {
    document.getElementById(buttonId).addEventListener("click", function () {
        window.location = pageURL;
    });
}

addLinkToButton("mainPageButton", "/index.html");
addLinkToButton("loginButton", "/html/login.html");
addLinkToButton("registerButton", "/html/registration.html");

function addActionToNavbarButton(buttonId, category) {
    document.getElementById(buttonId).addEventListener("click", function (mouseEvent) {
        document.cookie = `selectedSection = ${category}; path=/`;

        clearSelectedButtonCSS();
        addSelectedButtonCSS(mouseEvent.target);

        clearAllEntries();
        addEntriesByCategory(category);
    });
}

function clearSelectedButtonCSS() {
    let selectedButtons = document.getElementsByClassName("selected");
    for (let i = 0; i < selectedButtons.length; i++) {
        selectedButtons[i].style.color = "#2c328bbe";
        selectedButtons[i].style.backgroundColor = "white";
        selectedButtons[i].style.border = "0.1rem solid #2c328bbe";

        selectedButtons[i].classList.remove("selected");
    }
}

function addSelectedButtonCSS(button) {
    button.classList = "selected";

    button.style.color = "white";
    button.style.backgroundColor = "#2c328bbe";
    button.style.border = "0.1rem solid white";
}

function clearAllEntries() {
    document.getElementById("animalsList").innerHTML = "";
    document.getElementById("legend").innerHTML = "";
}

function addEntriesByCategory(category) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let jsonResultArray;
            jsonResultArray = JSON.parse(this.responseText);

            for (let i = 0; i < jsonResultArray.length; i++) {
                if (jsonResultArray[i].type === category) {
                    let anchorHTML = createEntryAnchor(
                        jsonResultArray[i].id,
                        jsonResultArray[i].name
                    );
                    addAnchorToPage(anchorHTML);

                    let entryHTML = createAnimalEntry(jsonResultArray[i]);
                    addAnimalEntryToPage(entryHTML);
                }
            }
        }
    };

    let jsonURL = "/js/animalSections/animalInformation.json";
    xhttp.open("GET", jsonURL, true);
    xhttp.send();
}

addActionToNavbarButton("invertebratesButton", "Invertebrate");
addActionToNavbarButton("crustaceansButton", "Crustacean");
addActionToNavbarButton("fishButton", "Ocean Fish");
addActionToNavbarButton("sharksButton", "Shark");
addActionToNavbarButton("reptilesButton", "Reptile");
addActionToNavbarButton("mammalsButton", "Mammal");
