const calcularEstadisticas = (numeros) => {
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    const promedio = suma / numeros.length;
    const max = Math.max(...numeros);
    const min = Math.min(...numeros);

    return { suma, promedio, max, min };
};

console.log(calcularEstadisticas([4, 8, 15, 16, 23, 42])); 

