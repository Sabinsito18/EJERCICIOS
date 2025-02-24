function fusionarObjetos(obj1, obj2) {
    let resultado = {};

    Object.keys(obj1).forEach(key => {
        resultado[key] = obj1[key];
    });

    Object.keys(obj2).forEach(key => {
        resultado[key] = obj2[key];
    });

    return resultado;
}

console.log(fusionarObjetos({ a: 1, b: 2 }, { b: 3, c: 4 }));
