function palindromo (word){
let arrayWord = [];
let palindromo = "";
for (let letter in word) {
    arrayWord.unshift(word[letter]);    
}

for (let index in arrayWord){
    palindromo += arrayWord[index];
}
return palindromo;
}

function checkEndOfWord (word, ending) {
    let result = true;
    let palindromoWord = palindromo(word);
    let palindromoEnding = palindromo(ending);
    for (letter in palindromoEnding) {
        if (palindromoEnding[letter] !== palindromoWord[letter]) {
            result = false;
        }
    }
    return result;
}


let word = 'trybe', ending = 'ybe';
console.log(checkEndOfWord(word, ending));