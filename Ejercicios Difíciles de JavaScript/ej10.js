function convertirCadenasANumeros(cadenas) {
    return cadenas.map(cadena => parseInt(cadena, 0)); 
}

const cadenas = ["1010", "12", "0xF", "1011", "1001"];
console.log(convertirCadenasANumeros(cadenas));
