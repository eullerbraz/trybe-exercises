const checkDraw = (number1, number2) => number1 === number2;

const drawResult = (number, callback) => {
  const drawNumber = parseInt((Math.random() * 5)) + 1;
  return callback(drawNumber, number) ? "Parabéns você ganhou" : "Tente novamente";
};

console.log(drawResult(2, checkDraw));
