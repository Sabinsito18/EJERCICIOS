const manipularBits = (numero) => {
    const duplicado = numero << 1;  
    const dividido = numero >> 1;  
    
    return { duplicado, dividido };
};


const resultado = manipularBits(5);
console.log(resultado); 
