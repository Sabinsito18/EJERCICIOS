function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number" && !isNaN(item));
}

const datos = [10, "texto", 3.14, null, undefined, NaN, 42, true, {}, [], -5];
console.log(filtrarNumeros(datos));
