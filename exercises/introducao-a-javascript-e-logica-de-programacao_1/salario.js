let salario = 3000;
let aliquotaINSS;
let aliquotaIR;

if (salario <= 1556.94) {
    aliquotaINSS = 0.08 * salario;
} else if (salario <= 1556.94) {
    aliquotaINSS = 0.08 * salario;
} else if (salario <= 2594.92) {
    aliquotaINSS = 0.09 * salario;
} else if (salario <= 5189.82) {
    aliquotaINSS = 0.11 * salario;
} else {
    aliquotaINSS = 570.88;
}

salario -= aliquotaINSS;

if (salario <= 1903.98) {
    aliquotaIR = 0;
} else if (salario <= 2826.65) {
    aliquotaIR = (0.075 * salario) - 142.80;
} else if (salario <= 3751.05) {
    aliquotaIR = (0.15 * salario) - 354.80;
} else if (salario <= 4644.68) {
    aliquotaIR = (0.225 * salario) - 636.13;
} else {
    aliquotaIR = (0.275 * salario) - 869.36;
}

salario -= aliquotaIR;

console.log(salario);