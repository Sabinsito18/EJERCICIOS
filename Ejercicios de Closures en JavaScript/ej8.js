function crearSumaAcumulativa() {
    let acumulado = 0;

    return function(numero) {
        acumulado += numero;
        return acumulado;
    };
}

const suma = crearSumaAcumulativa();

console.log(suma(5));  
console.log(suma(3));  
console.log(suma(10)); 

const otraSuma = crearSumaAcumulativa(); 
console.log(otraSuma(2)); 
console.log(otraSuma(4)); 
