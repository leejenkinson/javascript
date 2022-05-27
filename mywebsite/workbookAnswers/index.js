//1 
//alert("Hello World!");

//2
var car = 'volvo';
console.log(car);
document.write(car);
//3

function squared(num1) { return (num1 * num1); }
console.log(squared(3));

//4
function addNums(num1, num2, num3) {
    return (num1 + num2 + num3);
}

console.log(addNums(3, 10, 20));

//5

let person1 = {
    name: 'Lee',
    age: 37,
    occupation: 'TDPer'
};
console.log(person1);

person1.occupation = 'Engineer';
console.log(person1);

//6
function ageIncrease() {
    return (person1.age + numIncrease);
}
console.log(ageIncrease(numIncrease = 2));

//7
let myString = 'He said "My name is Elliott"';
console.log(myString);
console.log(myString.toUpperCase());

//8

let string = 'my age is ';
let age = 37;
console.log(string + age);

//9

const myArray = ['red', 'blue', 'green'];
console.log(myArray);
myArray.push('Yellow');
console.log(myArray);
myArray.pop();
console.log(myArray.pop());
console.log(myArray);

//10

if (person1.age > 20 && person1.age < 40) {
    console.log('True')
} else {
    console.log('False')
}

//11

for (let i = 1; i < 11; i++) {
    console.log(i);
}

//12

for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
    else { };
}

//qa question

let qaAge = 25;
if (qaAge >= 18 && qaAge <= 65) {
    console.log('you are of age');
} else if (qaAge < 18) {
    console.log('underage');
} else { 'you are neither' };

//qa ternary q

let anotherAge = 100;
let result = anotherAge >= 50 ? 'over 50' : 'under 50';
console.log(result);

//qa iteration q's
/*
let A = 100;
while (A<=200){
    if (A%2 == 0){
        console.log('-');
    } else {console.log('*');}
    A++;
}
*/
//alternative to above

/*for (let A = 100; A<=200; A++){
    if (A%2==0){
        console.log('-');
    } else {console.log('*');}
}*/

//create array, loop through it and print each value

let thisArray = [1, 2, 3, 4];
for (let eachValue of thisArray) {
    console.log(eachValue);
}

//iteration 3
function fizzbuzz(limit, three, five) {


    for (let B = 1; B <= limit; B++) {
        if (B % 3 == 0 && B % 5 == 0) {
            console.log('FizzBuzz');
        } else if (B % 5 == 0) {
            console.log(five);
        } else if (B % 3 == 0) {
            console.log(three);
        } else { console.log(B) }
    }
}


console.log(fizzbuzz(100,'fizz','buzz'));
console.log(fizzbuzz(30,'div3','div5'));


