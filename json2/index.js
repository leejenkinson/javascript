"use strict"

const myData = document.getElementById("myData");

fetch('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
    .then(response => response.json())
    .then( data => { 
        const heroes = data;
        console.log("Heroes info: ", heroes);

        const squadName = document.createElement('h1');
        squadName.innerText = "We go by the name of " + heroes.squadName;
        myData.appendChild(squadName);
        
        const secretBase = document.createElement('p');
        secretBase.innerText = "SSSHHhhhhh....Our secret base is called " + heroes.secretBase;
        myData.appendChild(secretBase);

        const formed = document.createElement('p');
        formed.innerText = "We've been around since " + heroes.formed;
        myData.appendChild(formed);

        const homeTown = document.createElement('p');
        homeTown.innerText = "If you mess around in " + heroes.homeTown + " we'll mess you up!";
        myData.appendChild(homeTown);

        const member1 = document.createElement('li');
        member1.innerText = heroes.members[0].name;
        myData.appendChild(member1);
        
        const member1Details = document.createElement('ul');
        member1Details.innerText = "Age: " + heroes.members[0].age + '\n' + "Secret Identity: " + heroes.members[0].secretIdentity;
        myData.appendChild(member1Details);

        const member1Powers = document.createElement('ul');
        member1Powers.innerText = "Powers: " + heroes.members[0].powers[0] + '\n' + heroes.members[0].powers[1] + '\n' + heroes.members[0].powers[2];
        myData.appendChild(member1Powers);

    })
    .catch(err=>console.error(err));