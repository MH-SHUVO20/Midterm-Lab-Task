const lightTheme = {
    pageBg: "#f4f4f4",
    textColor: "#333",
    boxBg: "#e6e6e6",
    boxBorder: "#999",
    btnText: "Switch to Dark Mode"
};

const darkTheme = {
    pageBg: "#121212",
    textColor: "#f0f0f0",
    boxBg: "#1e1e1e",
    boxBorder: "#444",
    btnText: "Switch to Light Mode"
};

let body = document.body;
let profile = document.getElementById("profile");
let btn = document.getElementById("tBtn");


let nightMode = false;

function changeTheme() {
    if (nightMode === false) {

        body.style.backgroundColor = darkTheme.pageBg;
        body.style.color = darkTheme.textColor;

        profile.style.backgroundColor = darkTheme.boxBg;
        profile.style.borderColor = darkTheme.boxBorder;

        btn.innerText = darkTheme.btnText;
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#000";

        nightMode = true;
    }
    else {
        body.style.backgroundColor = lightTheme.pageBg;
        body.style.color = lightTheme.textColor;

        profile.style.backgroundColor = lightTheme.boxBg;
        profile.style.borderColor = lightTheme.boxBorder;

        btn.innerText = lightTheme.btnText;
        btn.style.backgroundColor = "#333";
        btn.style.color = "#fff";

        nightMode = false;
    }
}

btn.addEventListener("click", changeTheme);