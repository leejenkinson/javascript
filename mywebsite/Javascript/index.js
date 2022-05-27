console.log('Lee');
console.info('Jenkinson');
console.warn('Bristol');
console.error('Taurus');

model = "DB7";
make = "Aston Martin";
console.log('My favourite car is an ' + make + ' and the model is '+ model);

console.log('this is a %c a message with some CSS.'+'color: orange; font-family: fantasy; font-style: bold; background-color: black; padding: 10px;')

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);


const car = {
    make: 'Audi', model: 'A8', reg: 'A8LEE' 
}
console.log(car);

car.colour = 'silver';
console.log(car);

let a = ['lee','wasim','tia'];
console.log(a[1]);

const darthVader = {
    allegiance: 'empire', weapon: 'lightsabre', sith: true};
console.log(darthVader);

console.log(darthVader.weapon);
console.log(darthVader.allegiance);
console.log(darthVader.sith);
console.log(darthVader.Jedi);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true" }`);

let myArray=['hello','everyone'];
console.log(myArray.length);
console.log(myArray.push('how','are','you'));
console.log(myArray.length);
console.log(myArray.shift('you'));
console.log(myArray.length);

for (let eachElement of myArray){
    console.log(eachElement);
}

