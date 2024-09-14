function hideElement (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBgColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColorById (elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlpa (){
    // get or create an alphabet array
    const alphaString = 'abcdefghijklmnopqrstuvwxyz';
    const alpha = alphaString.split('');
    // console.log(alpha);

    // get a random index between 0-25

    const randomNumber = Math.random () * 25;
    const index = Math.round (randomNumber);
    
    const alphabet = alpha[index];
    // console.log(index, alphabet);
    return alphabet;

}