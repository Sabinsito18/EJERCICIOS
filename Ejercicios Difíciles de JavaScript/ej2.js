function redondearNumeros(numeros) {
    return numeros.map(num => Number(num.toFixed(3))); 
}

const numerosDecimales = [1.23456, 2.6789, 3.1, 4.9999, 5.12345];
console.log(redondearNumeros(numerosDecimales));
