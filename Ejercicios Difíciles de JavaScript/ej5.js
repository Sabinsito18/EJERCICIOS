function redondearHaciaArriba(numeros) {
    return numeros.filter(num => typeof num === "number" && !isNaN(num)).map(Math.ceil);
}

const numeros = [1.2, -3.7, 4.5, NaN, 2.8, -1.1, "texto", 0, -0.3];
console.log(redondearHaciaArriba(numeros));
