const person = {
    name: 'Lee',
    age: 37,
    job: 'TDP'
}

let i = person.age;
function ageIncrease() {
    document.getElementById('inc').value = ++i;
}

function reset() {
    i = person.age;
    document.getElementById('inc').value = i;
}
