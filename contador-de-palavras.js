const texto = "René, Pereira   de Queiroz Maciel   ";


let arrayDePalavras = texto.trim().split(" ");


let palavras = 0;

for (let item of arrayDePalavras) {
    if (item) {
        palavras++
    }
}


console.log(palavras);





