function generarNumerosAleatorios(n, min, max) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

console.log(generarNumerosAleatorios(5, 10, 50));
