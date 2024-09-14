// function play(){
    // step-1: hide the homescreen. To hide the screen add the class named hidden to the home section
    // const homeSection = document.getElementById('home');

    // homeSection.classList.add('hidden');

    // Show the playground
    // const playGround = document.getElementById('play-ground');

    // playGround.classList.remove('hidden');

// }

function handleKeyboardKeyUp (event){
    const playerPressed = event.key;

    // Get the expected to press

    const currentAlphabetElement = document.getElementById('current-alpha');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlpha = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlpha);
    removeBgColorById(playerPressed);
    continueGame();

    // Check matched or not
    if(playerPressed === expectedAlpha){
        // update score:
        // 1. get the current score
        const cureentScoreElement = document.getElementById('score');
        const currentScoreText = cureentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // 2. increase the score by 1
        const newScore = currentScore + 1;
        // 3. update the score
        cureentScoreElement.innerText = newScore;
        // console.log('You get a point')
    } else {
        // console.log('you lost a life')
        // step-1: get the current life
        const currentLifeElement = document.getElementById('life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        // step-2: reduce the life number
        const newLife = currentLife - 1;
        // step-3: update the life number
        currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeyboardKeyUp);

function continueGame (){
    // Step-1: generate a random alphabet
    const alphabet = getARandomAlpa ();
    // console.log(alphabet);

    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alpha');
    currentAlphabetElement.innerText = alphabet;
    setBgColorById(alphabet);
}

function play(){
    hideElement('home');
    showElement('play-ground');
    continueGame();
}