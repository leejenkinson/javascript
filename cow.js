const cowsay = require('cowsay');


function speak(text,r){
    return cowsay.say(
        {text: text})        
}

//speak = (text) => cowsay.say({'text':text});
module.exports = {speak};

