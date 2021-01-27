var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //console.log("success!");
        // console.log(this.responseText);
        let jsonResultArray;
        jsonResultArray = JSON.parse(this.responseText);

        console.log(jsonResultArray);

        for (let i = 0; i < jsonResultArray.length; i++) {
            if (jsonResultArray[i].type === "Invertebrate") {
                let entryHTML = createAnimalEntry(jsonResultArray[i]);
                addAnimalEntryToPage(entryHTML);
            }
        }
    }
};

let jsonURL = "http://127.0.0.1:5500/js/animalSections/animalInformation.json";
xhttp.open("GET", jsonURL, true);
xhttp.send();

function createAnimalEntry(animalEntry) {
    let entryHTML = document.createElement("article");
    entryHTML.id = animalEntry.id;
    entryHTML.className = "animalContainer";

    let imageSection = createImageSection(animalEntry);
    let contentSection = createContentSection(animalEntry);

    entryHTML.appendChild(imageSection);
    entryHTML.appendChild(contentSection);

    console.log(entryHTML);

    return entryHTML;
}

function createImageSection(animalEntry) {
    let imageSection = document.createElement("aside");
    imageSection.className = "animalImage";

    let image = document.createElement("img");
    image.src = animalEntry.imageURL;
    image.alt = animalEntry.name;

    imageSection.appendChild(image);

    return imageSection;
}

function createContentSection(animalEntry) {
    let contentSection = document.createElement("section");
    contentSection.className = "animalInformation";

    let nameField = createNameField(animalEntry);
    let descriptionField = createDescriptionField(animalEntry);
    let extraField = createExtraField(animalEntry);

    contentSection.appendChild(nameField);
    contentSection.appendChild(descriptionField);
    contentSection.appendChild(extraField);

    return contentSection;
}

function createNameField(animalEntry) {
    let nameField = document.createElement("div");
    nameField.className = "nameField";

    let name = createName(animalEntry);
    let scientificName = createScientificName(animalEntry);

    nameField.appendChild(name);
    nameField.appendChild(scientificName);

    return nameField;
}

function createName(animalEntry) {
    let name = document.createElement("div");
    name.className = "name";

    let nameLabel = document.createElement("p");
    nameLabel.className = "nameLabel";
    nameLabel.innerText = "Name";

    let entryName = document.createElement("p");
    entryName.innerText = animalEntry.name;

    name.appendChild(nameLabel);
    name.appendChild(entryName);

    return name;
}

function createScientificName(animalEntry) {
    let scientificName = document.createElement("div");
    scientificName.className = "scientificName";

    let nameLabel = document.createElement("p");
    nameLabel.className = "nameLabel";
    nameLabel.innerText = "Scientific Name";

    let entryName = document.createElement("p");
    entryName.innerText = animalEntry.scientificName;

    scientificName.appendChild(nameLabel);
    scientificName.appendChild(entryName);

    return scientificName;
}

function createDescriptionField(animalEntry) {
    let descriptionField = document.createElement("div");
    descriptionField.className = "descriptionField";

    for (let i = 0; i < animalEntry.description.length; i++) {
        let paragraph = document.createElement("p");

        paragraph.innerText = animalEntry.description[i];

        descriptionField.appendChild(paragraph);
    }

    return descriptionField;
}

function createExtraField(animalEntry) {
    let extraField = document.createElement("div");
    extraField.className = "extraField";

    let likesField = createLikesField();
    let dangerField = createDangerField(animalEntry);

    extraField.appendChild(likesField);
    extraField.appendChild(dangerField);

    return extraField;
}

function createLikesField() {
    let likesField = document.createElement("div");
    likesField.className = "likes";

    let counter = document.createElement("p");
    counter.className = "likeCounter";
    counter.innerText = 0;

    let likeButton = document.createElement("button");
    likeButton.className = "likeButton";
    likeButton.innerText = "Like";

    likesField.appendChild(counter);
    likesField.appendChild(likeButton);

    return likesField;
}

function createDangerField(animalEntry) {
    let dangerField = document.createElement("div");
    dangerField.className = "danger";

    let dangerLabel = createDangerLabel();
    let dangerRating = createDangerRating(animalEntry);

    dangerField.appendChild(dangerLabel);
    dangerField.appendChild(dangerRating);

    return dangerField;
}

function createDangerLabel() {
    let dangerLabel = document.createElement("p");
    dangerLabel.className = "dangerLabel";
    dangerLabel.innerText = "Danger Level";

    return dangerLabel;
}

function createDangerRating(animalEntry) {
    let dangerRating = document.createElement("div");
    dangerRating.className = "dangerRating";

    let index = 0;

    while (index < animalEntry.dangerLevel) {
        if (animalEntry.dangerLevel - index >= 1) {
            let fullStar = createFullStar();
            dangerRating.appendChild(fullStar);
        } else {
            let halfStar = createHalfStar();
            dangerRating.appendChild(halfStar);
        }

        index++;
    }

    while (index < 5) {
        let emptyStar = createEmptyStar();
        dangerRating.appendChild(emptyStar);
        index++;
    }

    return dangerRating;
}

function createEmptyStar() {
    let emptyStar = document.createElement("img");
    emptyStar.className = "starImage";
    emptyStar.src = "http://127.0.0.1:5500/img/starEmpty.png";
    emptyStar.alt = "Empty Star";

    return emptyStar;
}

function createHalfStar() {
    let halfStar = document.createElement("img");
    halfStar.className = "starImage";
    halfStar.src = "http://127.0.0.1:5500/img/starHalf.png";
    halfStar.alt = "Half Star";

    return halfStar;
}

function createFullStar() {
    let fullStar = document.createElement("img");
    fullStar.className = "starImage";
    fullStar.src = "http://127.0.0.1:5500/img/starFull.png";
    fullStar.alt = "Full Star";

    return fullStar;
}

function addAnimalEntryToPage(animalEntry) {
    let listElement = document.getElementById("animalsList");
    listElement.appendChild(animalEntry);
}
