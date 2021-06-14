function hydrate(bebidas) {
  let regex = /\d+/g; // \d+ Significa números de 1 a 9;
  let arrayNumbers = bebidas.match(regex);
  let cups = 0;
  let result = '';
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    cups += parseInt(arrayNumbers[index]);
  }

  if (cups > 1) {
    result = `${cups} copos de água`;
  } else {
    result = `${cups} copo de água`;
  }
  return result;
}

module.exports = hydrate;