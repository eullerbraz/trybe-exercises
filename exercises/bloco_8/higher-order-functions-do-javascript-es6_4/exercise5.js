const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((accArray, name) => {
    const wordAs = name.split('').reduce((accWord, letter) => {
      if (letter === 'a' || letter === 'A') {
        return accWord + 1;
      }
      return accWord;
    }, 0);
    return accArray + wordAs;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);