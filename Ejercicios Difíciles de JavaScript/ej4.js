function filtrarPorValorAbsoluto(objetos, umbral) {
    return objetos.filter(obj => Math.abs(obj.valor) > umbral);
}

const datos = [
    { valor: -10 },
    { valor: 5 },
    { valor: -3 },
    { valor: 20 },
    { valor: -25 },
    { valor: 30 }
];

const umbral = 1;
console.log(filtrarPorValorAbsoluto(datos, umbral));
