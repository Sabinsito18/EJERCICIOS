const calcularLetraDNI = (dnis) => {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    
    return dnis.map(dni => {
        const letra = letras[dni % 23];
        return { dni, letra };
    });
};

const dnis = [12345678, 23456789, 34567890];
const resultado = calcularLetraDNI(dnis);

console.log(resultado);

