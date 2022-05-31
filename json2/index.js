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

        const member1 = document.createElement('h2');
        member1.innerText = heroes.members[0].name;
        myData.appendChild(member1);

        const stats = document.createElement('h3');
        stats.innerText = "Stats: ";
        myData.appendChild(stats);

        const member1Details = document.createElement('ul');
        member1Details.innerText = "Age: " + heroes.members[0].age + '\n' + "Secret Identity: " + heroes.members[0].secretIdentity;
        myData.appendChild(member1Details);

        const member1Powers = document.createElement('ul');
        member1Powers.innerText = "Powers: " + heroes.members[0].powers[0] + '\n' + heroes.members[0].powers[1] + '\n' + heroes.members[0].powers[2];
        myData.appendChild(member1Powers);

        const member2 = document.createElement('h2');
        member2.innerText = heroes.members[1].name;
        myData.appendChild(member2);

        const stats2 = document.createElement('h3');
        stats2.innerText = "Stats: ";
        myData.appendChild(stats2);

        const member2Details = document.createElement('ul');
        member2Details.innerText = "Age: " + heroes.members[1].age + '\n' + "Secret Identity: " + heroes.members[1].secretIdentity;
        myData.appendChild(member2Details);

        const powers = document.createElement('ul');

        for (let power of heroes.members[1].powers) {
            const p1 = document.createElement('li');
            p1.innerText = power;
            powers.appendChild(p1);
            console.log(p1);
        }
        myData.appendChild(powers);

        const member3 = document.createElement('h2');
        member3.innerText = heroes.members[2].name;
        myData.appendChild(member3);
        
        const stats3 = document.createElement('h3');
        stats3.innerText = "Stats: ";
        myData.appendChild(stats3);

        const member3Details = document.createElement('ul');
        member3Details.innerText = "Age: " + heroes.members[2].age + '\n' + "Secret Identity: " + heroes.members[2].secretIdentity;
        myData.appendChild(member3Details);

        const powers2 = document.createElement('ul');

        for(let power of heroes.members[2].powers) {
            const p1 = document.createElement('li');
            p1.innerText = power;
            powers2.appendChild(p1);
        }
        myData.appendChild(powers2);


    })
    .catch(err => console.error(err));