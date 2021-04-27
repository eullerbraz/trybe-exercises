function somatorio (number) {
    let somatorio = 0;
    for (let index = 1; index <= number; index += 1) {
        somatorio += index;
    }
    return somatorio;
}

let number = 6;
console.log(somatorio(number));