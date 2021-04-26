let n = 11;
let simbolo = "*";
let linha = "";
let espaco = " "
let posicaoMeio = parseInt(n/2) + 1;
let posicaoEsq = posicaoMeio;
let posicaoDir = posicaoMeio;

for (let indexLinha = 1; indexLinha <= posicaoMeio; indexLinha += 1) {
    linha = "";
    for (indexColuna = 1; indexColuna <= n; indexColuna += 1) {
        if (posicaoEsq == indexColuna || posicaoDir == indexColuna || indexLinha == posicaoMeio) {
            linha += simbolo;
        } else {
            linha += espaco;
        }
    }
    console.log(linha);
    posicaoEsq -= 1;
    posicaoDir += 1;
}