const input = document.getElementById("input");
const anBtn = document.getElementById("anBtn");
const resultBox = document.getElementById("result");
const charC = document.getElementById("charC");
const wordC = document.getElementById("wordC");
const revTxt = document.getElementById("revTxt");

function runAnalysis() {
    const val = input.value;

    if (val.trim() === "") {
        alert("Please enter some text first");
        return;
    }

    const cCount = val.length;

    const wArray = val.trim().split(" ");
    let wCount = 0;
    
    for (let i = 0; i < wArray.length; i++) {
        if (wArray[i] !== "") {
            wCount++;
        }
    }

    const reversed = val.split("").reverse().join("");

    charC.innerText = cCount;
    wordC.innerText = wCount;
    revTxt.innerText = reversed;

    resultBox.style.display = "block";
}

anBtn.addEventListener("click", runAnalysis);