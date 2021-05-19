const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (let index = 0; index < wordArray.length; index += 1) {
    if (wordArray[index].length > maxLength) {
      maxLength = wordArray[index].length;
      result = wordArray[index];
    }
  }
  return result;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));