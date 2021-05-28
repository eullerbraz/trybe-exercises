const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

/* function flatten() {
  return arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  }, []);
} */

function flatten() {
  return arrays.reduce((accumulator, currentValue) => {
    currentValue.forEach((value) => accumulator.push(value));
    return accumulator;
  }, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);