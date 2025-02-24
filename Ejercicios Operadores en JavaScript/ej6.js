const clasificarNumero = (numero) => {
    return numero > 0 ? "Positivo" :numero < 0 ? "Negativo" : "Cero";
};


console.log(clasificarNumero(5));   
console.log(clasificarNumero(-3));  
console.log(clasificarNumero(0));    
