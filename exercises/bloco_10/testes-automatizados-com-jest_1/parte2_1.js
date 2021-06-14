function encode(string) {
  let result = '';
  for (let index in string) {
    if (string[index] === 'a') {
      result += '1';
    } else if (string[index] === 'e') {
      result += '2';
    } else if (string[index] === 'i') {
      result += '3';
    } else if (string[index] === 'o') {
      result += '4';
    } else if (string[index] === 'u') {
      result += '5';
    } else {
      result += string[index];
    }
  }
  return result;
}

function decode(string) {
  let result = '';
  for (let index in string) {
    if (string[index] === '1') {
      result += 'a';
    } else if (string[index] === '2') {
      result += 'e';
    } else if (string[index] === '3') {
      result += 'i';
    } else if (string[index] === '4') {
      result += 'o';
    } else if (string[index] === '5') {
      result += 'u';
    } else {
      result += string[index];
    }
  }
  return result;
}

module.exports = { encode, decode };
