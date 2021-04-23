let custo = 1000;
let valor = 1500;
let custoTotal = custo + (custo * 0.20);
let lucro = valor - custoTotal;
let resultado;

if (custo < 0 || valor < 0) {
    resultado = "Erro";
} else {
    resultado = lucro * 1000;
}

console.log(resultado);