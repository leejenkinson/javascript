"use strict"

fetch('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("myData").innerText = JSON.stringify(data, null, 2)
    })
    .catch(err => console.error(err))




