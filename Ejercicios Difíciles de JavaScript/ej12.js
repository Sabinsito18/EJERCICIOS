function convertirAMixtoANumber(valores) {
    const convertidos = [];
    const noConvertidos = [];

    valores.forEach(valor => {
        const numeroConvertido = Number(valor);
        if (isNaN(numeroConvertido)) {
            noConvertidos.push(valor); 
        } else {
            convertidos.push(numeroConvertido);  
        }
    });

    return { convertidos, noConvertidos };
}

const valoresMixtos = [42, "33", true, null, undefined, {}, "hola", false];
console.log(convertirAMixtoANumber(valoresMixtos));
