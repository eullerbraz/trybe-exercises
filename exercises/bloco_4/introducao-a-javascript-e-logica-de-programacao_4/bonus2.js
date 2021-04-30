function add(num1, num2) {
    let maior = num1;
    let menor = num2;

    if (num2 > num1) {
        maior = num2;
        menor = num1;
    }

    let stringMaior = maior.toString();
    let stringMenor = menor.toString();
    

    while (stringMenor.length < stringMaior.length) {
        stringMenor = "0" + stringMenor;
    }

    let stringResultado = "";
    for (let index in stringMaior) {
        stringResultado += parseInt(stringMaior[parseInt(index)]) + parseInt(stringMenor[parseInt(index)]); 
    }

    let resultado = parseInt(stringResultado);
    
    return resultado;
  }

  console.log(add(16, 18))