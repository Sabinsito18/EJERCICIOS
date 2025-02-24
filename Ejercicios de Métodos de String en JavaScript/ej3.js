const buscarPalabra = (texto, palabra) => {
    return texto.toLowerCase().includes(palabra.toLowerCase());
};


console.log(buscarPalabra("JavaScript es un lenguaje poderoso", "lenguaje")); 
console.log(buscarPalabra("Aprendiendo a programar", "Python")); 
