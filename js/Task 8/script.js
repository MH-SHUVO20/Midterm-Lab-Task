const sel = document.getElementById("select");
const box1 = document.getElementById("div2");
const box2 = document.getElementById("div3");

function changeView() {
    const val = sel.value;

    if (val === "student") {
        box1.style.display = "block";
        box2.style.display = "none";
    } 
    else if (val === "teacher") {
        box1.style.display = "none";
        box2.style.display = "block";
    } 
    else {
        box1.style.display = "none";
        box2.style.display = "none";
    }
}

sel.addEventListener("change", changeView);