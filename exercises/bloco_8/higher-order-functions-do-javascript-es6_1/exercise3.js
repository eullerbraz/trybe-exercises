const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } else if (studentAnswer === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const checkAnswers = (rightAnswers, studentAnswers, callback) => {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    score += callback(rightAnswers[index], studentAnswers[index]);    
  }
  return `Nota final: ${score}`;
}

console.log(checkAnswers(rightAnswers, studentAnswers, check));