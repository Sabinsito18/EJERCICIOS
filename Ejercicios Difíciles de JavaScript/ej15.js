function transformarStringsANumeros(cadenas) {
    return cadenas.map(cadena => {
        const numero = Number(cadena);
        return {
            original: cadena,
            numero: numero,
            exponencial: numero.toExponential(2),
            redondeado: Math.round(numero)
        };
    });
}

const cadenas = ["123.456", "78.9", "0.00123", "45.67", "100"];
console.log(transformarStringsANumeros(cadenas));
