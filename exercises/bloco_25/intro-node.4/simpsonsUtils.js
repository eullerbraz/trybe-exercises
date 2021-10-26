const fs = require('fs/promises');

const simpsons = [
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
]


const setSimpsonsFile = async (newSimpsons) => {
  return await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsons));
};

const getSimpsonsFile = async () => {
  return JSON.parse(await fs.readFile('./simpsons.json'));
};

const restoreSimpsonsFile = async () => {
  return await setSimpsonsFile(simpsons);
};

restoreSimpsonsFile();

module.exports = {setSimpsonsFile, getSimpsonsFile, restoreSimpsonsFile };
