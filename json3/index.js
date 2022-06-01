"use strict"

const myData = document.getElementById("myData");

fetch('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json')
    .then(response => response.json())
    .then(data => {
        const kings = data;
        console.log("Kings info: ", kings);

 
    
           
    var a = kings;
    var index = 0;
    var found;
    var entry;
    for (index = 0; index <a.length; ++index) {
        entry = a[index];
        if (entry.cty == "United Kingdom") {
            found = entry;
            console.log(entry);
            const info = document.createElement('p');
            info.innerText = "Here's the info: ", entry;
            myData.appendChild(info);
        }
    }
    
        
})