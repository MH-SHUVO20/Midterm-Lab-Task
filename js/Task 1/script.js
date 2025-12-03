
function validateForm() {
    const un = document.getElementById("un");
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    const cPass = document.getElementById("cPass");
    const phone = document.getElementById("phone");

    const unErr = document.getElementById("unErr");
    const eErr = document.getElementById("eErr");
    const passErr = document.getElementById("passErr");
    const cPassErr = document.getElementById("cPassErr");
    const phoneErr = document.getElementById("phoneErr");
    const formErr = document.getElementById("formErr");


    let isERR = false;

    if (un.value.trim() === "") {
        isERR = true;
        unErr.innerHTML = "Enter a proper username";
    }

    if (!email.value.includes("@") || !email.value.includes("." || email.value.trim() === "")) {
        isERR = true;
        eErr.innerHTML = "Enter a valid email";
    }

    if (pass.value.trim().length < 6 || pass.value.trim() === "") {
        isERR = true;
        passErr.innerHTML = "Password must be at least 6 characters";
    }

    if (cPass.value.trim() === "" || pass.value.trim() !== cPass.value || cPass.value.trim() === "") {
        isERR = true;
        cPassErr.innerHTML = "Passwords do not match";
    }

    if (isNaN(phone.value) || phone.value.trim().length !== 11 || phone.value.trim() === "") {
        isERR = true;
        phoneErr.innerHTML = "phone must be 11 digits";
    }
    if (isERR) {
        formErr.innerHTML = "Please fix the errors above and try again.";
        return false;
    }

    else {
        formErr.innerHTML = "Registration Successful!”";
        return true;
    }
}
