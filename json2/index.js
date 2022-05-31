"use strict"

const myData = document.getElementById("myData");

fetch('https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json')
    .then(response => response.json())
    .then(data => {
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

        for (let member of heroes.members) {

            const memberName = document.createElement('h2');
            memberName.innerText = member.name;
            myData.appendChild(memberName);

            const stats = document.createElement('h3');
            stats.innerText = "Stats: ";
            myData.appendChild(stats);

            const age = document.createElement('p');
            age.innerText = "Age: " + member.age;
            myData.appendChild(age);

            const secretId = document.createElement('p');
            secretId.innerText = "Secret Identity: " + member.secretId;
            myData.appendChild(secretId);
            
            const powerText = document.createElement('h3');
            powerText.innerText = "Powers: ";
            myData.appendChild(powerText);

            const powers = document.createElement('ul');

            for (let power of member.powers) {
                const p1 = document.createElement('li');
                p1.innerText = power;
                powers.appendChild(p1);
                console.log(p1);
            }
            myData.appendChild(powers);
        }
    })
    .catch(err => console.error(err));