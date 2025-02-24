function sumaCondicional(numeros) {
    let suma = 0;
    
    numeros.forEach(numero => {
        if (numero > 10 && numero % 3 === 0) {
            suma += numero;
        }
    });

    return suma;
}

console.log(sumaCondicional([5, 12, 18, 7, 21, 30]));