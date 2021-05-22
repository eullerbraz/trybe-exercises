const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = (array) => {
  middlePos = Math.floor(array.length / 2);
  middleWord = [array[middlePos]];
  array.splice(middlePos, 1);
  return middleWord;
}

//Testes
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);