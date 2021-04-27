function checkPalindromo (word){
    let arrayWord = [];
    let palindromo = "";
    for (let letter in word) {
        arrayWord.unshift(word[letter]);    
    }
    
    for (let index in arrayWord){
        palindromo += arrayWord[index];
    }

    if (word === palindromo) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPalindromo('arara'));