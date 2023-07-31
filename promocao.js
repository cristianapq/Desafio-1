const precos = [30, 10, 5];

let menorValor = Infinity;
let soma = 0;
let carrinho = 0;
//let peças = 0;

for (let pecas of precos) {
    carrinho += pecas
    if (pecas < menorValor) {
        menorValor = pecas;


    }

}
if (precos.length > 2) {
    soma = carrinho - menorValor * 0.5;
} else {
    soma = carrinho
}


console.log(soma);

