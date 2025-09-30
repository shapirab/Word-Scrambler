let scrambledWordHolder = document.getElementById('scrambled-word');
let actionBtn = document.querySelector('.btn');

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

setScrambledWordHolder();

actionBtn.addEventListener('click', setScrambledWordHolder);

function setScrambledWordHolder(){
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    scrambledWordHolder.innerText = scrambleWord(selectedWord);
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