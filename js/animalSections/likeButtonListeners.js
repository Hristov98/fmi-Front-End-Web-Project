"use strict";

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
