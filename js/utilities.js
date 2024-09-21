function addClassElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function removeClassElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setTextElementById (elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextElementById (elementId){
    const element = document.getElementById (elementId);
    const elementText = element.innerText;
    return elementText;
}

function setBgOfElement (elementId){
    const element = document.getElementById(elementId);
    const elementColor = element.classList.add('bg-orange-400');
    return elementColor;
}

function removeBgOfElement (elementId){
    const element = document.getElementById(elementId);
    const elementColor = element.classList.remove('bg-orange-400');
    return elementColor;
}

function getElementValueById (elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}


function getRandomAlphabet (){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const index = alphabet.split('');

    const randomNumber = Math.random() * 25;
    const roundNumber = Math.round(randomNumber);
    const randomAlphabet = index[roundNumber];
    return randomAlphabet;
}