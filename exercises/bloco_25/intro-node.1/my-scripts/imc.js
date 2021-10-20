/* const imc = (weight=80, height=1.87) => {
  console.log((weight / Math.pow(height, 2)).toFixed(2));
};

imc(); */

/* const { questionFloat } = require('readline-sync');

const imc = () => {
  const weight = questionFloat('Qual seu peso? (em Kg)\n');
  const height = questionFloat('Qual sua altura? (e m)\n');

  console.log((weight / Math.pow(height, 2)).toFixed(2));
};

imc(); */

const { questionFloat } = require('readline-sync');

const imc = () => {
  const weight = questionFloat('Qual seu peso? (em Kg)\n');
  const height = questionFloat('Qual sua altura? (e m)\n');

  return((weight / Math.pow(height, 2)).toFixed(2));
};

const imcSituation = () => {
  const imcValue = Number(imc());

  console.log(`Seu imc é ${imcValue}`);

  if (imcValue < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } else if (imcValue < 25) {
    console.log('Peso normal');
  } else if (imcValue < 30) {
    console.log('Acima do peso (sobrepeso)');
  } else if (imcValue < 35) {
    console.log('Obesidade grau I');
  } else if (imcValue < 40) {
    console.log('Obesidade grau II');
  } else {
    console.log('Obesidade grau III e IV');
  };
};

imcSituation();
