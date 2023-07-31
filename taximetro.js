//70 centavos por cada KM de viagem .
//50 centavos por MINUTO de viagem .

//(acima de 10 km) fica mais barato, 
//passando a custar apenas 50 centavos por km. 

//(acima de 20 min) fica mais barato, 
//passando a custar apenas 30 centavos .







let min = 15;
let km = 25;

let custoMin = 0;
let custoKm = 0;

if (min > 20) {
    custoMin = 20 * 50 + (min - 20) * 30
} else {
    custoMin = min * 50
}
if (km > 10) {
    custoKm = 10 * 70 + (km - 10) * 50
} else {
    custoKm = km * 70
}
console.log(custoKm + custoMin);



