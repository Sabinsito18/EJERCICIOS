function extraerValoresPrimitivos(valores) {
    return valores.map(valor => {
        return valor instanceof Number ? valor.valueOf() : valor;
    });
}


const valores = [42, new Number(100), "texto", new Number(200), true, new Number(50)];
console.log(extraerValoresPrimitivos(valores));
