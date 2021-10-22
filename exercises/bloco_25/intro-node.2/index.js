// 1
/* const funcao = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas números');
    }

    const result = (a + b) * c;

    result < 50 ? reject('Valor muito baixo') : resolve(result);
  });
}; */

// 2
/* const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const chamadaFuncao = () => {
  const randomNumbers = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  funcao(...randomNumbers)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
};

chamadaFuncao(); */

// 3
/* const getRandomNumber = () => {
  return Math.floor(Math.random() * 100 + 1);
};

const chamadaFuncao = async () => {
  const randomNumbers = [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  try {
    const result = await funcao(...randomNumbers);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

chamadaFuncao(); */

// 4
const fs = require('fs').promises;

const getAllCharacters = async () => {
  const result = await fs.readFile('simpsons.json');
  const data = JSON.parse(result);
  return data;
}

// 4.1
const printAllCharacters = async () => {
  const data = await getAllCharacters();
  
  data.forEach(({id, name}) => {
    console.log(`${id} - ${name}`);
  });
};

printAllCharacters();

//4.2
const getCharacterById = async (characterId) => {
  const data = await getAllCharacters();
  const selectedCharacter = data
    .find(({ id }) => id === characterId);
  
  if (!selectedCharacter) {
    throw new Error('id não encontrado');
  }

  return selectedCharacter;
}

getCharacterById('3')
  .then((character) => console.log(character))
  .catch((err) => console.log(`Erro: ${err.message}`));

// 4.3
const filterCharacters = async () => {
  const data = await getAllCharacters();

  const filteredCharacters = data
    .filter(({ id }) => id !== '10' && id !== '6');

  await fs.writeFile('simpsons.json', JSON.stringify(filteredCharacters));
}

filterCharacters();

// 4.4
const createSimpsonsFamily = async () => {
  const data = await getAllCharacters();
  const simpsonsFamily = data
    .filter(({ id }) => Number(id) >= 1 && Number(id) <= 4);
  
  await fs.writeFile('simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();

// 4.5
const addNelsonToFamily = async () => {
  const data = await getAllCharacters();
  const nelson = data
    .find(({ name }) => name === 'Nelson Muntz');
  const result = await fs.readFile('simpsonsFamily.json');
  const family = JSON.parse(result);

  family.push(nelson);

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(family));
}

addNelsonToFamily();

// 4.6
const addMaggieToFamily = async () => {
  const data = await getAllCharacters();
  const maggie = data
    .find(({ name }) => name === 'Maggie Simpson');
  const result = await fs.readFile('simpsonsFamily.json');
  const family = JSON.parse(result);

  family.filter(({ name }) => name !== 'Nelson Muntz');
  family.push(maggie);

  await fs.writeFile('simpsonsFamily.json', JSON.stringify(family));
}

addMaggieToFamily();

// 5
const writeManyFiles = async () => {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  const promises = array.map((string, index) => {
    return fs.writeFile(`file${index + 1}.txt`, string);
  });

  await Promise.all(promises);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const filePromises = fileNames.map((fileName) => {
    return fs.readFile(fileName);
  });

  const fileContents = await Promise.all(filePromises);
  const fileAllString = fileContents.join(' ');

  fs.writeFile('fileAll.txt', fileAllString);

}

writeManyFiles();
