function poker(min, max, valores) {

    const reais = [];
    for (let item of valores) {
        if (item >= min && item <= max) {
            reais.push(item)
        }
    }

    console.log(reais);

    poker()
}

