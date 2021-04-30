let divisores = 1;
let numero = 31;
let resultado;

for (let index = 2; index <= numero; index += 1) {
    if (numero % index === 0) {
        divisores += 1;
    }  
}

if (divisores === 2) {
    console.log("É primo")
} else {
    console.log("Não é primo")
}