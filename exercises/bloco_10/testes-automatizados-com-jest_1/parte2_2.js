function techList(arrayTech, name) {
  let arrayObjects = [];
  arrayTech = arrayTech.sort();

  for (let index = 0; index < arrayTech.length; index += 1) {
    let info = {
      tech: arrayTech[index],
      name,
    };
    arrayObjects.push(info);
  }

  if (arrayTech.length === 0) {
    arrayObjects = 'Vazio!';
  }
  return arrayObjects;
}

module.exports = techList;