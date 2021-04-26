let n = 5;
let simbolo = "*";
let linha = "";
let espaco = " "
let posicao = n;

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    for (indexColuna = 0; indexColuna < n; indexColuna += 1) {
        if (posicao > indexColuna) {
            linha += espaco;
        } else {
            linha += simbolo;
        }
    }
    console.log(linha);
    linha = "";
    posicao -= 1;
}