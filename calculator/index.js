"use strict"

const display = document.getElementById('display');

const updateCalc = (event) => {
    const change = event.target.innerText;
    if (change === "C") return display.value = "0";
    const current = display.value;
    const result = parseInt(current) + parseInt(change);

    display.value = result;
} 

const buttons = document.getElementsById('calcButtons').childNodes;
for (let button of buttons) {
    button.addEventListener("click", updateCalc);
}

const output = document.getElementById("output");