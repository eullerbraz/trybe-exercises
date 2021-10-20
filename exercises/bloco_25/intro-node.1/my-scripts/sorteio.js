const { question, questionInt } = require('readline-sync');

const sorteio = () => {
  const randomNumber = Math.floor(Math.random() * 11);
  const number = questionInt('Qual o número sorteado? (0 a 10)\n');

  console.log(`O número sorteado foi ${randomNumber}`);

  if (randomNumber === number) {
    console.log('Parabéns, você acertou!!!');
  } else {
    console.log('Não foi dessa vez, tente novemente!');
  }

  const playAgain = question('Você quer jogar novamente? (S/N)\n');

  if (playAgain === 'S' || playAgain === 's') {
    console.log('------------------')
    sorteio();
  };
};

sorteio();
