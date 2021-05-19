const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const compararNumeros = (a, b) => a - b;

oddsAndEvens.sort(compararNumeros);

console.log(`${oddsAndEvens}`);