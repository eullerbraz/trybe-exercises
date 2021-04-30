function maiorNome(array) {
    maior = array[0];
    for (let index in array) {
        if (array[index].length > maior.length) {
            maior = array[index];
        }
    }
    return maior;
}

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(maiorNome(array));