const { promises } = require('fs');

const funcaoNumber = (number) => {
  if (typeof number !== 'number') {
    return 'o valor deve ser um número';
  }

  if (number < 0) {
    return 'negativo';
  }
  if (number > 0) {
    return 'positivo';
  }
  return 'neutro';
};

const funcaoEscreve = async (nomeArquivo, conteudoArquivo) => {
  await promises.writeFile(nomeArquivo, conteudoArquivo);

  return 'ok';
};

module.exports = {
  funcaoNumber,
  funcaoEscreve,
};
