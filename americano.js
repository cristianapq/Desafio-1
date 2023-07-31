const numeros = [5, 5, 5, 5, 5, 5];

let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];

}

const restoDaDivisao = soma % numeros.length

if (restoDaDivisao === 0) {
    console.log(numeros.length)
} else {
    console.log(restoDaDivisao)
}
















