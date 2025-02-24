function convertirCadenasADecimales(cadenas) {
    return cadenas.map(cadena => parseFloat(cadena));
}


const cadenas = ["3.14abc", "42.56xyz", "7.89#", "100.5test", "0.333.5"];
console.log(convertirCadenasADecimales(cadenas));
