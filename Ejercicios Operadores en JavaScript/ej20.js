const generarHistograma = (numeros) => {
    const histograma = {};

    // Recorremos el array de numeros
    numeros.forEach(num => {
        // Si el número ya existe como clave aumenta su valor
        if (histograma[num]) {
            histograma[num]++;
        } else {
            // Si no existe lo añadimos con valor 1
            histograma[num] = 1;
        }
    });

    return histograma;
};

const numeros = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
const resultado = generarHistograma(numeros);

console.log(resultado);