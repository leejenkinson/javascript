let pCreate = document.createElement('p');
let body = document.querySelector('body');
pCreate.textContent = 'A little bit of text';
body.appendChild(pCreate);

const input = document.createElement('input');
input.setAttribute ('type', 'text');
document.body.appendChild(input);

body.replaceChild(input, pCreate);

body.removeChild(pCreate);

let myButton = document.createElement("BUTTON") ;
myButton.innerHTML = "Click Me";
body.appendChild(myButton);
myButton.addEventListener(pCreate, input,);

