const sname = document.getElementById("sname");
const roll = document.getElementById("roll");
const dept = document.getElementById("dept");
const saveBtn = document.getElementById("saveBtn");
const table = document.getElementById("table");

function addData(e) {
    e.preventDefault();

    const nVal = sname.value;
    const rVal = roll.value;
    const dVal = dept.value;

    if (nVal === "" || rVal === "" || dVal === "") {
        alert("Please fill in all fields.");
        return;
    }

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");

    const b = document.createElement("button");
    b.innerText = "Remove";
    b.className = "del";

    b.addEventListener("click", function () {
        tr.remove();
    });

    td1.innerText = nVal;
    td2.innerText = rVal;
    td3.innerText = dVal;

    td4.appendChild(b);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    const tbody = table.querySelector("tbody");
    tbody.appendChild(tr);

    sname.value = "";
    roll.value = "";
    dept.value = "";
}

saveBtn.addEventListener("click", addData);