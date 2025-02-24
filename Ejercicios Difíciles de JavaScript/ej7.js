function redondeoInteligente(numeros) {
    return numeros.map(num => {
        const decimal = num % 1;
        if (decimal === 0.5 || decimal === -0.5) {
            return Math.floor(num) % 2 === 0 ? Math.floor(num) : Math.ceil(num);
        }
        return Math.round(num);
    });
}

const numeros = [1.5, 2.5, 3.5, 4.5, -1.5, -2.5, -3.5, -4.5, 5.2, 6.8, 7.1];
console.log(redondeoInteligente(numeros));
