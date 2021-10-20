const { questionInt } = require('readline-sync');

const velocidade = () => {
  const distance = questionInt('Qual a distância? (em m)\n');
  const time = questionInt('Qual o tempo? (em s)\n');

  console.log(`A velocidade é ${(distance / time).toFixed(2)} m/s`);
};

velocidade();
