//A entrada é um string armazenado na variável cartaParaCima que indica
// qual carta ficou virada para cima.
// Será sempre uma das opções: Q, J, K, A, 2, 3.

//Imprima na tela qual é a manilha desta partida. 
//Sua resposta deve ser sempre uma das opções: Q, J, K, A, 2, 3.

let carta = "3"

if (carta === "Q") {
    console.log("J")
} else if (carta === "J") {
    console.log("K")
} else if (carta === "K") {
    console.log("A")
} else if (carta === "A") {
    console.log("2")
} else if (carta === "2") {
    console.log("3")
} else if (carta === "3") {
    console.log("Q")
}



