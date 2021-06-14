// Promise Then / Catch

/* const promiseCreator = () => {
  const myPromise =  new Promise((resolve, reject) => {
    const arrayPos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = arrayPos.map((pos) => {
      const ramdomNumber = Math.floor(Math.random() * 50) + 1;
      return ramdomNumber * ramdomNumber;
    });
    const sum = array.reduce((sum, number) => sum + number);
    sum < 8000 ? resolve(sum) : reject();
  })
  myPromise
  .then(sum => [2, 3, 5, 10].map(number => sum / number))
  .then(array => array.reduce((number, acc) => number + acc, 0))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

promiseCreator(); */

// Promise Async e Await

const sumRamdom =  () => {
  const arrayPos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = arrayPos.map((pos) => {
    const ramdomNumber = Math.floor(Math.random() * 50) + 1;
    return ramdomNumber * ramdomNumber;
  });
  const sum = array.reduce((sum, number) => sum + number);
  if (sum < 8000) {
    return sum;
  }
  throw new Error();
}

const sumArray = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const promiseCreator = async () => {
  try {
    await sumRamdom();
    await sumArray();
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

promiseCreator();
