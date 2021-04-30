//Parte 1
//Exercicio 1
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

//Exercicio 2
let pai = ondeVoceEsta.parentElement;
pai.style.color = 'red';

//Exercicio 3
let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerHTML = 'Primeiro Filho do Filho';

//Exercicio 4
let primeiroFilho = pai.firstElementChild;

//Exercicio 5
let primeiroFilho2 = ondeVoceEsta.previousElementSibling;

//Exercicio 6
let atencao = ondeVoceEsta.nextSibling; //Aqui queremos o próximo nó e não o próximo elemento.

//Exercicio 7
let terceiroFilho = ondeVoceEsta.nextElementSibling; //Aqui queremos o próximo elemento e não o próximo nó.

//Exercicio 8
let terceiroFilho2 = pai.lastElementChild.previousElementSibling;

//Parte 2
//Exercicio 1
let irmaoOndeVoceEsta = document.createElement('div');
irmaoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoOndeVoceEsta);

//Exercicio 2
let filhoOndeVoceEsta = document.createElement('div');
filhoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

//Exercicio 3
let filhoPrimeiroFilhoDoFilho = document.createElement('div');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//Exercicio 4
let terceiroFilho3 = filhoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;

//Parte 3
for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    let currentChildren = pai.childNodes[index];
    if (currentChildren.id !== 'elementoOndeVoceEsta') {
      currentChildren.remove();
    }
  }
  let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    segundoEUltimoFilhoDoFilho.remove();