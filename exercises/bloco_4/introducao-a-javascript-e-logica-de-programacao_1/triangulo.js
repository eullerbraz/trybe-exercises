let anguloA = 90;
let anguloB = 30;
let anguloC = 60;
let resultado;

if (anguloA<=0 || anguloB<=0 ||anguloC<=0) {
    resultado = "Erro"
} else if (anguloA + anguloB + anguloC == 180) {
    resultado = true;
} else {
    resultado = false;
}

console.log(resultado);