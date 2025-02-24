const verificarParidad = (numero) => {
    return (numero & 1) === 0 ? "Par" : "Impar";
};


console.log(verificarParidad(4));  
console.log(verificarParidad(7)); 
