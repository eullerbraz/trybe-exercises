function indexMenor(array) {
    let maior = array[0];
    let pos = 0;
    for (let index in array) {
        if (array[index] > maior) {
            maior = array[index];
            pos = index;
        }
    }
    return pos;
}

let arrayTest = [2, 3, 6, 7, 10, 1];
console.log(indexMenor(arrayTest));