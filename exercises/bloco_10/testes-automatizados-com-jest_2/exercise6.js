const { Module } = require("module");

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const getListAnimals = (type) => {
  findAnimalsByType(type).then(list => list);
};

//Exercicio 6.1

// Promise
/* const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        resolve(animal);
      };
      reject('Nenhum animal com esse nome!');
    }, 100);
  })
};

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
}; */

//Async/Await
const findAnimalByName = async (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      };
      return reject('Nenhum animal com esse nome!');
    }, 100);
  })
};

const getAnimal = async (name) => {
  return await findAnimalByName(name);
};

//Exercicio 6.2

//Promise
/* const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
}; */

//Async/Await
const findAnimalByAge = async (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByAge = async (age) => {
  const animal = await findAnimalByAge(age);
  return animal;
};

module.exports = { getAnimal, getAnimalByAge };