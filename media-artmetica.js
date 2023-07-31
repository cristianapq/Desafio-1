const lista = [2, 2, 2];
let soma = 0;
for (let i = 0; i < lista.length; i++) {
    soma += lista[i] / lista.length;
}

console.log(soma);