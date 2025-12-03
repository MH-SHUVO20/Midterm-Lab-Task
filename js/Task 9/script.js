const tBtn = document.getElementById("tBtn");
const clk = document.getElementById("clk");
const grt = document.getElementById("grt");
const frm = document.getElementById("frm");
const err = document.getElementById("err");

const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b4 = document.getElementById("b4");
const b5 = document.getElementById("b5");
const b6 = document.getElementById("b6");
const b7 = document.getElementById("b7");
const b8 = document.getElementById("b8");
const b9 = document.getElementById("b9");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");
const p6 = document.getElementById("p6");
const p7 = document.getElementById("p7");
const p8 = document.getElementById("p8");
const p9 = document.getElementById("p9");

let dark = false;

function mode() {
    if (dark === false) {
        document.body.classList.add("dark");
        tBtn.innerText = "Light Mode";
        dark = true;
    } else {
        document.body.classList.remove("dark");
        tBtn.innerText = "Dark Mode";
        dark = false;
    }
}

tBtn.addEventListener("click", mode);

function timer() {
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ap = "AM";

    if (h === 0) h = 12;
    if (h > 12) {
        h = h - 12;
        ap = "PM";
    }

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    clk.innerText = h + ":" + m + ":" + s + " " + ap;

    const rh = d.getHours();
    if (rh < 12) {
        grt.innerText = "Good Morning!";
    } else if (rh < 18) {
        grt.innerText = "Good Afternoon!";
    } else {
        grt.innerText = "Good Evening!";
    }
}

setInterval(timer, 1000);
timer();

function clean() {
    p1.style.display = "none";
    p2.style.display = "none";
    p3.style.display = "none";
    p4.style.display = "none";
    p5.style.display = "none";
    p6.style.display = "none";
    p7.style.display = "none";
    p8.style.display = "none";
    p9.style.display = "none";
}

b1.addEventListener("click", function () {
    clean();
    p1.style.display = "block";
});

b2.addEventListener("click", function () {
    clean();
    p2.style.display = "block";
});

b3.addEventListener("click", function () {
    clean();
    p3.style.display = "block";
});

b4.addEventListener("click", function () {
    clean();
    p4.style.display = "block";
});

b5.addEventListener("click", function () {
    clean();
    p5.style.display = "block";
});

b6.addEventListener("click", function () {
    clean();
    p6.style.display = "block";
});

b7.addEventListener("click", function () {
    clean();
    p7.style.display = "block";
});

b8.addEventListener("click", function () {
    clean();
    p8.style.display = "block";
});

b9.addEventListener("click", function () {
    clean();
    p9.style.display = "block";
});

function valid(e) {
    e.preventDefault();

    const v1 = document.getElementById("in1").value;
    const v2 = document.getElementById("in2").value;
    const v3 = document.getElementById("in3").value;

    if (v1 === "") {
        err.style.color = "red";
        err.innerText = "Name is required";
        return;
    }

    if (v2.indexOf("@") === -1 || v2.indexOf(".") === -1) {
        err.style.color = "red";
        err.innerText = "Invalid Email";
        return;
    }

    if (v3.length < 10) {
        err.style.color = "red";
        err.innerText = "Message too short";
        return;
    }

    err.style.color = "green";
    err.innerText = "Sent Successfully!";

    document.getElementById("in1").value = "";
    document.getElementById("in2").value = "";
    document.getElementById("in3").value = "";
}

frm.addEventListener("submit", valid);