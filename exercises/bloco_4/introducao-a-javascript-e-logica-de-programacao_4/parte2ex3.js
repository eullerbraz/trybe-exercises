function indexMenor(array) {
    let menor = array[0];
    let pos = 0;
    for (let index in array) {
        if (array[index] < menor) {
            menor = array[index];
            pos = index;
        }
    }
    return pos;
}

let arrayTest = [2, 4, 6, 7, 10, 0, -3];
console.log(indexMenor(arrayTest));