var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let jsonResultArray;
        jsonResultArray = JSON.parse(this.responseText);

        for (let i = 0; i < jsonResultArray.length; i++) {
            if (jsonResultArray[i].type === "Invertebrate") {
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

document.getElementById("invertebratesButton").style.color = "white";
document.getElementById("invertebratesButton").style.backgroundColor = "#2c328bbe";
document.getElementById("invertebratesButton").style.border = "0.1rem solid white";

document.querySelector("#animalsList").addEventListener("click", function (clickEvent) {
    if (clickEvent.target.classList.contains("likeButton")) {
        let button = clickEvent.target;

        if (button.classList.contains("liked")) {
            setButtonToNormalStatus(button);
        } else {
            setButtonToLikedStatus(button);
        }
    }
});

function setButtonToNormalStatus(button) {
    button.style.color = "#2c328bbe";
    button.style.backgroundColor = "white";
    button.style.border = "0.1rem solid black";
    button.innerHTML = "Like";

    let counter = Number(button.parentNode.childNodes[0].innerHTML);
    button.parentNode.childNodes[0].innerHTML = counter - 1;

    button.classList.remove("liked");
}

function setButtonToLikedStatus(button) {
    button.style.color = "white";
    button.style.backgroundColor = "#2c328bbe";
    button.innerHTML = "Undo";

    let counter = Number(button.parentNode.childNodes[0].innerHTML);
    button.parentNode.childNodes[0].innerHTML = counter + 1;

    button.classList.add("liked");
}
