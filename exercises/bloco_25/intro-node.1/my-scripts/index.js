const { question } = require('readline-sync');

const script = question(
  `Escolha um script para ser executado:
  1 - IMC
  2 - Velocidade
  3 - Sorteio
  `);

switch (script) {
  case '1':
    require('./imc');
    break;
  case '2':
    require('./velocidade');
    break;
  case '3':
    require('./sorteio');
    break;
  default:
    console.log('Digito inválido')
    break;
}
