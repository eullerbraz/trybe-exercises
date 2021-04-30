let peca = "Rainha".toLowerCase();

let resultado;

switch (peca) {
    case "bispo":
        resultado = "diagonais";
        break;
    case "cavalo":
        resultado = "em L";

    case "torre":
        resultado = "reto";
        break;
    case "peão":
        resultado = "para frente 1 casa";
        break;
    case "rei":
        resultado = "todos os lados 1 casa";
        break;
    case "rainha":
        resultado = "todos os lados";
        break;
    default:
        resultado = "peça inválida";
        break;
}

console.log(resultado);