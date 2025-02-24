function generarYRedondearNumeros(n) {
    const resultados = [];

    for (let i = 0; i < n; i++) {
        const original = Math.random() * 100;
        const redondeado = Math.round(original);
        resultados.push({ original, redondeado });
    }

    return resultados;
}

console.log(generarYRedondearNumeros(5));
