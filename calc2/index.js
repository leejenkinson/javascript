"use strict"

function display(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value= '';
}

function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}

function backspace() {
    let bs = document.getElementById("result").value;
    document.getElementById("result").value = bs.substr(0, bs.length -1);
  }