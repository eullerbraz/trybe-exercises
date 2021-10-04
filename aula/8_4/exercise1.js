const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

//Filter/Reduce
const sumPairNumbers = (array) => {
  const pairNumbers = array.filter((number) => number % 2 === 0);
  return pairNumbers.reduce((result, number) => result + number);
} 
console.log(sumPairNumbers(numbers));

//Reduce
const sumPairNumberReduce = (array) => {
  return array.reduce(((result, number) => number % 2 === 0 ? number + result : result), 0)
}
console.log(sumPairNumberReduce(numbers));