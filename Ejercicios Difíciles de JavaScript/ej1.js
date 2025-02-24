function convertirNumerosACadenas(numeros) {
    return {
        original: numeros,
        convertido: numeros.map(String)
    };
}

const numeros = [1, 2, 3, 4, 5];
console.log(convertirNumerosACadenas(numeros));
