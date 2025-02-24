const reemplazarPalabra = (texto, objetivo, reemplazo) => 
    texto.replace(new RegExp(objetivo, "gi"), reemplazo);


console.log(reemplazarPalabra("Me gusta JavaScript. JavaScript es genial.", "JavaScript", "Python"));
