function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor; 
    };
}


const multiplicadorPor2 = crearMultiplicador(2);
console.log(multiplicadorPor2(5));  
console.log(multiplicadorPor2(3));  

const multiplicadorPor10 = crearMultiplicador(10);
console.log(multiplicadorPor10(4)); 
console.log(multiplicadorPor10(0.5)); 
