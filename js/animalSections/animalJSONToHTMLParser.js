"use strict";

function createEntryAnchor(id, name) {
    let anchor = document.createElement("li");

    let link = document.createElement("a");
    link.className = "quickLink";
    link.href = "#" + id;
    link.innerText = name;

    anchor.appendChild(link);

    return anchor;
}

function addAnchorToPage(anchor) {
    let listOfAnchors = document.getElementById("legend");
    listOfAnchors.appendChild(anchor);
}

function createAnimalEntry(animalEntry) {
    let entryHTML = document.createElement("article");
    entryHTML.id = animalEntry.id;
    entryHTML.className = "animalContainer";

    let imageSection = createImageSection(animalEntry.imageURL, animalEntry.name);
    let contentSection = createContentSection(animalEntry);

    entryHTML.appendChild(imageSection);
    entryHTML.appendChild(contentSection);

    return entryHTML;
}

function createImageSection(url, name) {
    let imageSection = document.createElement("aside");
    imageSection.className = "animalImage";

    let image = document.createElement("img");
    image.src = url;
    image.alt = name;

    imageSection.appendChild(image);

    return imageSection;
}

function createContentSection(animalEntry) {
    let contentSection = document.createElement("section");
    contentSection.className = "animalInformation";

    let nameField = createNameField(animalEntry.name, animalEntry.scientificName);
    let descriptionField = createDescriptionField(animalEntry.description);
    let extraField = createExtraField(animalEntry.likeCounter, animalEntry.dangerLevel);

    contentSection.appendChild(nameField);
    contentSection.appendChild(descriptionField);
    contentSection.appendChild(extraField);

    return contentSection;
}

function createNameField(animalName, animalScientificName) {
    let nameField = document.createElement("div");
    nameField.className = "nameField";

    let name = createName(animalName);
    let scientificName = createScientificName(animalScientificName);

    nameField.appendChild(name);
    nameField.appendChild(scientificName);

    return nameField;
}

function createName(animalName) {
    let name = document.createElement("div");
    name.className = "name";

    let nameLabel = document.createElement("p");
    nameLabel.className = "nameLabel";
    nameLabel.innerText = "Name";

    let entryName = document.createElement("p");
    entryName.innerText = animalName;

    name.appendChild(nameLabel);
    name.appendChild(entryName);

    return name;
}

function createScientificName(scientificName) {
    let name = document.createElement("div");
    name.className = "scientificName";

    let nameLabel = document.createElement("p");
    nameLabel.className = "nameLabel";
    nameLabel.innerText = "Scientific Name";

    let entryName = document.createElement("p");
    entryName.innerText = scientificName;

    name.appendChild(nameLabel);
    name.appendChild(entryName);

    return name;
}

function createDescriptionField(description) {
    let descriptionField = document.createElement("div");
    descriptionField.className = "descriptionField";

    for (let i = 0; i < description.length; i++) {
        let paragraph = document.createElement("p");
        paragraph.innerText = description[i];

        descriptionField.appendChild(paragraph);
    }

    return descriptionField;
}

function createExtraField(likesNumber, dangerLevel) {
    let extraField = document.createElement("div");
    extraField.className = "extraField";

    let likesField = createLikesField(likesNumber);
    let dangerField = createDangerField(dangerLevel);

    extraField.appendChild(likesField);
    extraField.appendChild(dangerField);

    return extraField;
}

function createLikesField(likesNumber) {
    let likesField = document.createElement("div");
    likesField.className = "likes";

    let counter = document.createElement("p");
    counter.className = "likeCounter";
    counter.innerText = likesNumber;

    let likeButton = document.createElement("button");
    likeButton.className = "likeButton";
    likeButton.innerText = "Like";

    likesField.appendChild(counter);
    likesField.appendChild(likeButton);

    return likesField;
}

function createDangerField(dangerLevel) {
    let dangerField = document.createElement("div");
    dangerField.className = "danger";

    let dangerLabel = createDangerLabel();
    let dangerRating = createDangerRating(dangerLevel);

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

function createDangerRating(dangerLevel) {
    let dangerRating = document.createElement("div");
    dangerRating.className = "dangerRating";

    let index = 0;

    while (index < dangerLevel) {
        if (dangerLevel - index >= 1) {
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
    emptyStar.src = "/img/starEmpty.png";
    emptyStar.alt = "Empty Star";

    return emptyStar;
}

function createHalfStar() {
    let halfStar = document.createElement("img");
    halfStar.className = "starImage";
    halfStar.src = "/img/starHalf.png";
    halfStar.alt = "Half Star";

    return halfStar;
}

function createFullStar() {
    let fullStar = document.createElement("img");
    fullStar.className = "starImage";
    fullStar.src = "/img/starFull.png";
    fullStar.alt = "Full Star";

    return fullStar;
}

function addAnimalEntryToPage(animalEntry) {
    let listElement = document.getElementById("animalsList");
    listElement.appendChild(animalEntry);
}
