let porcentagem = 80;
let nota;

if (porcentagem < 0 || porcentagem > 100) {
    nota = "Erro";
} else if (porcentagem >= 90) {
    nota = "A";
} else if (porcentagem >= 80) {
    nota = "B";
} else if (porcentagem >= 70) {
    nota = "C";
} else if (porcentagem >= 60) {
    nota = "D";
} else if (porcentagem >= 50) {
    nota = "E";
} else {
    nota = "F";
}

console.log(nota);