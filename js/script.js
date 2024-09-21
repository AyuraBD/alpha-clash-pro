function handleKeywordPress (e){
    const playerPressed = e.key;

    if (playerPressed === 'Escape'){
        gameOver ();
    }
    const generatedAlpha = getTextElementById('current-alpha');
    const generated = generatedAlpha.toLocaleLowerCase();
    if(playerPressed === generated){
        const scoreValue = getElementValueById('score');
        const updateScoreValue = scoreValue + 1;
        setTextElementById('score', updateScoreValue);
        setTextElementById('end-score-value', updateScoreValue);
        removeBgOfElement(generated);
        continueGame();
    } else{
        const lifeValue = getElementValueById('life');
        const updateLifeValue = lifeValue - 1;
        setTextElementById('life', updateLifeValue);
        
        if(lifeValue === 0){
            gameOver ();                        
        }
    }
}
document.addEventListener('keyup', handleKeywordPress );


function continueGame (){
    const randomAlphabet = getRandomAlphabet();
    setTextElementById('current-alpha', randomAlphabet);
    setBgOfElement(randomAlphabet);
}
function play (){
    addClassElementById('home');
    addClassElementById('end-score')
    removeClassElementById('play-ground');
    continueGame();
}

function gameOver (){
    setTextElementById ('score', 0);
    setTextElementById ('life', 5);
    addClassElementById('play-ground');
    removeClassElementById('end-score');

    const currentAlpha = getTextElementById('current-alpha');
    removeBgOfElement(currentAlpha);
}