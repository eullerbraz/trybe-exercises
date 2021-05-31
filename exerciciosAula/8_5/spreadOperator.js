// Faça uma lista com as suas frutas favoritas
const specialFruit = ['caqui', 'laranja', 'abacate'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['creme de leite', 'leite condensado', 'açucar'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));