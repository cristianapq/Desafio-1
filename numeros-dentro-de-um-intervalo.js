// três parâmentros: numero, limiteInferior e limiteSuperior;
//10 5 20;

function intervalo(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        return "pertence";
    } else {
        return "não pertence";
    }
}


const resultado = intervalo(12, 10, 20);
console.log(resultado);

