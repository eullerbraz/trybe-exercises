function modaArray (array) {
    let moda = 0;
    let repete = 0;
    let repeteMais = 0;
    for (let index in array) {
        for (let index2 in array){
            if (array[index] === array[index2]){
                repete += 1;
            }
        }
        if (repete > repeteMais) {
            moda = array[index];
            repeteMais = repete;
        }
        repete = 0;
    }
    return moda;
}
let array = [2, 3, 2, 5, 8, 2, 3];
console.log(modaArray(array));