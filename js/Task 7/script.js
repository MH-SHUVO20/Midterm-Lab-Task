const para = document.getElementById("stxt");
const b1 = document.getElementById("bgBtn");
const b2 = document.getElementById("sizeBtn");
const b3 = document.getElementById("centerBtn");
const b4 = document.getElementById("resetBtn");

let fSize = 16;

function changeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    para.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function growText() {
    fSize = fSize + 2;
    para.style.fontSize = fSize + "px";
}

function centerText() {
    para.style.textAlign = "center";
}

function resetStyle() {
    fSize = 16;
    para.style.fontSize = "16px";
    para.style.backgroundColor = "transparent";
    para.style.textAlign = "left";
}

b1.addEventListener("click", changeColor);
b2.addEventListener("click", growText);
b3.addEventListener("click", centerText);
b4.addEventListener("click", resetStyle);