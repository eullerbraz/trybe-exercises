let n = 5;
let simbolo = "*";
let linha = "";
let espaco = " "
let posicaoMeio = parseInt(n/2) + 1;
let posicaoEsq = posicaoMeio;
let posicaoDir = posicaoMeio;

for (let indexLinha = 0; indexLinha <= posicaoMeio; indexLinha += 1) {
    for (indexColuna = 0; indexColuna <= n; indexColuna += 1) {
        if (posicaoEsq < indexColuna && posicaoDir > indexColuna) {
            linha += simbolo;
        } else {
            linha += espaco;
        }
    }
    console.log(linha);
    linha = "";
    posicaoEsq -= 1;
    posicaoDir += 1;
}