let scrambledWordHolder = document.getElementById('scrambled-word');
let actionBtn = document.querySelector('.btn');
let score = document.querySelector('.socre-value');
let results = document.querySelector('.results-text');

let scoreValue = 0;
let words = [
    'hello',
    'lesson',
    'refund',
    'escape',
    'tower',
    'quest',
    'metal',
    'pool',
    'rate'
]

let currentWordToScramble = selectWordToScramble();
setScrambledWordHolder();

actionBtn.addEventListener('click', action);

function selectWordToScramble(){
    return words[Math.floor(Math.random() * words.length)];
}

function setScrambledWordHolder(){   
    scrambledWordHolder.innerText = scrambleWord(currentWordToScramble);
}

function action(){
    let answer = document.querySelector('.input');
    if(isWordIdentified(answer.value)){
        scoreValue += 3;
        results.innerText = 'Bravo!';
    }
    else{
        results.innerText = 'Ouch! Better luck next time';
    }

    currentWordToScramble = selectWordToScramble();
    answer.value = '';

    score.innerText = scoreValue;
    
    setScrambledWordHolder();   
}

//This works just fine. The only advantage the tutorial's algorithm has is that it does not require a new array.
function scrambleWord(word){
    let wordArray = word.split('');
    let newWordArray= [];
    while (wordArray.length > 0){
        let randomIndex = Math.floor(Math.random() * wordArray.length);
        let newLetter = wordArray[randomIndex];
        wordArray.splice(randomIndex, 1);
        
        newWordArray.push(newLetter);
    }
    return newWordArray.join('');
}

function tutorialScrambleFunc(array){
    for(let i = array.length - 1; i > 0; i--){
        let temp = array[i];
        let randomIndex = Math.floor(Math.random() * (i+1));//so a number between 0 and i + 1
        //switch the letters: what used to be in i is now what is in randomIndex, and what was in the randomIndex is now what used to be in i
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

function isWordIdentified(answer){
    //In the tutorial he is doing simply
    //if(answer === currentWordToScramble){}
    if(!compareLength(answer, currentWordToScramble)){
        return false;
    }

    for(let i = 0; i < answer.length; i++){
        if(answer[i] !== currentWordToScramble[i]){
            return false;
        }
    }
    return true;
}

function compareLength(word_1, word_2){
    return word_1.length === word_2.length;
}