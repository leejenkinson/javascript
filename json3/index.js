"use strict"

const myData = document.getElementById("myData");

fetch('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json')
    .then(response => response.json())
    .then(data => {
        const kings = data[0];
        console.log("Kings info: ", kings);

        const kingDiv = document.createElement("div");

        const kingName = document.createElement("h2");
        kingName.innerText = kings.nm;
        kingDiv.appendChild(kingName);
    
        myData.appendChild(kingDiv);
    })