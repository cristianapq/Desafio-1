// percorrer todos os itens do array, se esse item for maior que 18 
//e ao mesmo tempo for menor que menor idade (infinity), 
//então a menor idade será este item. 
// se menor idade for diferente de infinity então CRESCA E APARECA.

const idade = [17, 45, 65];

let menorIdade = Infinity

for (let item of idade) {
    if (item >= 18 && item < menorIdade) {
        menorIdade = item;

    }

}
if (menorIdade != Infinity) {
    console.log(menorIdade)
} else {
    console.log("CRESCA E APARECA")
}


