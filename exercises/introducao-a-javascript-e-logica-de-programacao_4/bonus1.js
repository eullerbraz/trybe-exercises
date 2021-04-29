function romanos (algarismos) {
    let romanos = {
        I: 1,
        V: 5,
        X: 10, 
        L: 50, 
        C: 100,
        D: 500,
        M: 1000
    }

    let array = [];
    let resultado = 0;

    for (let index in algarismos) {
        array[index] = romanos[algarismos[index]];
    }

    for (let index in array) {
        if (parseInt(index) === array.length -1) {
            resultado += array[index];
            break;
        }
        if (array[parseInt(index)] >= array[parseInt(index) + 1]) {
            resultado += array [index];
        } else {
            resultado -= array[index];
        }
    }
    return resultado;
}

let algarismos = "MMXXI";
console.log(romanos(algarismos));