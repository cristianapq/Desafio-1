const numeros = `3
0 0
0 3
4 0`


function maior(numeros) {

    let maiorDistancia = 0;


    const coordenadas = [];
    const linhas = numeros.trim().split("\n");

    for (let item of linhas) {
        const par = item.trim().split(" ")
        coordenadas.push({
            x: parseFloat(par[0], 10),
            y: parseFloat(par[1], 10)
        })
    }
    for (let c1 of coordenadas) {
        for (let c2 of coordenadas) {
            const distancia = Math.sqrt((c2.x - c1.x) ** 2 + (c2.y - c1.y) ** 2)
            if (distancia > maiorDistancia) {
                maiorDistancia = distancia
            }
        }
    }
    console.log(maiorDistancia);
}
maior(numeros);






