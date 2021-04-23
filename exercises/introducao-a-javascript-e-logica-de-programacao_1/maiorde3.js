let a = 3;
let b = 4;
let c = 5;
let maior;

if (a>b && a>c) {
   maior = a; 
} else if (b>a && b>c) {
    maior = b;
} else {
    maior = c;
}

console.log(maior);