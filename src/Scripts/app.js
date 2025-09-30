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

console.log(scrambleWord(words[2]))

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