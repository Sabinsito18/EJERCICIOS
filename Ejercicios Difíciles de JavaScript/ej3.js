function convertirANotacionExponencial(numeros) {
    return numeros.map(num => {
        const notacion = num.toExponential(4);
        return num < 0 ? { valor: notacion, advertencia: "Número negativo" } : notacion;
    });
}

const numeros = [123456, -98765, 0.0001234, 3.14159];
console.log(convertirANotacionExponencial(numeros));
