const contarTipos = (array) => {
    let contar = {};

    array.forEach(elemento => {
        const tipo = typeof elemento;

        contar[tipo] = contar[tipo] ? contar[tipo] + 1 : 1;
    });
    return contar;
};

console.log(contarTipos([1, "hola", true, 42, false, "mundo", null, undefined])); 

