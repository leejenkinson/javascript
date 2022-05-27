"use strict"

const makeParagraph = () => {
    const newPara = document.createElement("p");
    newPara.id = "newPara";
    document.body.appendChild(newPara);
}

const updateParagraph = () => {
    const para = document.getElementById("newPara");
    para.innerText = document.getElementById("paraText").value;
}

const deleteParagraph = () => {
    const para = document.getElementById("newPara");
    document.body.removeChild(para);
}