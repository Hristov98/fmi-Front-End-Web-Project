document.getElementById("submitRegistration").addEventListener("click", function () {
    validateUserRegistrationForm();
});

function validateUserRegistrationForm() {
    event.preventDefault();
    let inputUsername = document.getElementById("username").value;
    let inputEmail = document.getElementById("email").value;
    let inputPassword = document.getElementById("password").value;
    let inputConfirmPassword = document.getElementById("confirmPassword").value;

    if (
        validateUserName(inputUsername) &&
        validateEmail(inputEmail) &&
        validatePassword(inputPassword) &&
        validateMatchingPasswords(inputPassword, inputConfirmPassword)
    ) {
        window.location = "../../index.html";
    }
}

function validateUserName(username) {
    if (username.length <= 0) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The username must not be empty.";
        return false;
    }

    const invalidSymbolsRegex = /[^a-zA-Z0-9-_]/g;
    if (username.search(invalidSymbolsRegex) != -1) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The username must not contain special symbols.";
        return false;
    }

    return true;
}

function validateEmail(email) {
    if (email.length < 0) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The email must not be empty.";
        return false;
    }

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!validEmailRegex.test(email)) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The email must be written in the correct format.";
        return false;
    }

    return true;
}

function validatePassword(password) {
    if (password.length < 6) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The password must contain at least 6 characters.";
        return false;
    }
    if (password.search(/[A-Z]/g) == -1) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The password must contain at least 1 uppercase letter.";
        return false;
    }
    if (password.search(/[a-z]/g) == -1) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The password must contain at least 1 lowercase letter.";
        return false;
    }
    if (password.search(/[0-9]/g) == -1) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The password must contain at least 1 digit.";
        return false;
    }

    return true;
}

function validateMatchingPasswords(password, confirmPassword) {
    if (password != confirmPassword) {
        document.getElementById("errorMessageField").innerText =
            "ERROR: The two passwords must match.";
        return false;
    }

    return true;
}