//Função
const verify = (password) => {
  //Verifica null
  if (password === null) return false;
  //Verifica se é maior ou igual a 8
  if (password.length < 8) return false;
  //Verifica se possui letra maiúscula e minúscula
  let upperCount = 0;
  let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowerCount = 0;
  let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numbersCount = 0;
  let numbersAlphabet = '0123456789';
  for (let index = 0; index < password.length; index += 1) {
    for (let indexUp = 0; indexUp < upperAlphabet.length; indexUp += 1) {
      if (password[index] === upperAlphabet[indexUp]) {
        upperCount = 1;
        break;
      }
    }
    for (let indexLow = 0; indexLow < lowerAlphabet.length; indexLow += 1) {
      if (password[index] === lowerAlphabet[indexLow]) {
        lowerCount = 1;
        break;
      }
    }
    for (let indexNum = 0; indexNum < numbersAlphabet.length; indexNum += 1) {
      if (password[index] === numbersAlphabet[indexNum]) {
        numbersCount = 1;
        break;
      }
    }
    if (upperCount > 0 && lowerCount > 0 && numbersCount > 0) break;
  }
  if (upperCount === 0 || lowerCount === 0 || numbersCount ===0) return false;

  //Se cumprir todos requisitos retorna true
  return true;
}

//Testes
const assert = require('assert');
assert.strictEqual(typeof(verify), 'function');
assert.ok(verify('12345678'));
assert.ok(verify(null));
assert.ok(verify('aaaaaaA1'));
assert.ok(verify('AAAAAAa1'));