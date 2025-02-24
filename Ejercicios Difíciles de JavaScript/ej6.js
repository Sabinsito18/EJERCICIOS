function redondearHaciaAbajo(numeros) {
    return numeros.map(num => Number.isInteger(num) ? num : Math.floor(num));
}

const numeros = [4.7, 2.1, -3.9, 5, -2, 8.99, 0, -0.1];
console.log(redondearHaciaAbajo(numeros));
