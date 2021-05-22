const greetPeople = (people) => {
  let greeting = 'Hello ';

  for (const person in people) {
    people[person] = `${greeting}${people[person]}`;
  }
  return people;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

//Testes
const assert = require('assert');

assert.deepStrictEqual(greetPeople(parameter), result);