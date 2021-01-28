'use strict';

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonResultArray;
        jsonResultArray = JSON.parse(this.responseText);

        for (let i = 0; i < jsonResultArray.length; i++) {
            if (jsonResultArray[i].type === "Crustacean") {
                let anchorHTML = createEntryAnchor(jsonResultArray[i].id, jsonResultArray[i].name);
                addAnchorToPage(anchorHTML);

                let entryHTML = createAnimalEntry(jsonResultArray[i]);
                addAnimalEntryToPage(entryHTML);
            }
        }
    }
};

let jsonURL = "http://127.0.0.1:5500/js/animalSections/animalInformation.json";
xhttp.open("GET", jsonURL, true);
xhttp.send();

document.getElementById("crustaceansButton").style.color = "white";
document.getElementById("crustaceansButton").style.backgroundColor = "#2c328bbe";
document.getElementById("crustaceansButton").style.border = "0.1rem solid white";