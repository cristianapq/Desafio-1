let input = `cris
r1c2i3s`

const senha = input.trim().split("\n")

let primeiroItem = senha[0]
let segundoItem = senha[1]


for (let letra of primeiroItem) {
    const indice = segundoItem.indexOf(letra)

    if (indice === -1) {
        console.log("NAO")
        return
    } else {
        segundoItem = segundoItem.slice(indice + 1)

    }
}

console.log("SIM");










