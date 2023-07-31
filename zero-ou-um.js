

const jogadores = [

    {
        nome: "Herman",
        jogada: 1
    },
    {
        nome: "Rhodes",
        jogada: 0
    },
    {
        nome: "Beach",
        jogada: 0
    },
    {
        nome: "Laure",
        jogada: 0
    },
    {
        nome: "Beatrice",
        jogada: 0
    },

];

const zero = [];

const um = [];




for (let item of jogadores) {
    if (item.jogada === 1) {
        um.push(item)
    } else {
        zero.push(item)
    }
}

const resultadoZero = zero
const resultadoUm = um




if (zero.length === 1) {
    console.log(zero[0].nome)
} else if (um.length === 1) {
    console.log(um[0].nome)
} else {
    console.log("NINGUEM")
}







// let zero = []
// let um = []

//     } else {
//         zero.push(item)
//     }
//     console.log(um)
// }

// for (let item of zero) {

//     if (zero.length === 1) {
//         console.log(zero.nome)

//     } else if (um.length === 1) {
//         console.log(um.nome)

//     } else {
//         console.log("NINGUEM")
//     }
// }









