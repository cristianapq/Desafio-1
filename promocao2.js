const itens = [5, 10];

let menorValor = Infinity;
let soma = 0;
let carrinho = 0;

if (itens.length < 3) {
    for (let pecas of itens) {
        carrinho += pecas
    }
} else {
    for (let pecas of itens) {
        if (pecas < menorValor) {
            menorValor = pecas;
            soma = carrinho - menorValor / 2

        }
    }
}

console.log(soma);
