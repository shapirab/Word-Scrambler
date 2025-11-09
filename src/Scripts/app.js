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

function isWordIdentified(answer){
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