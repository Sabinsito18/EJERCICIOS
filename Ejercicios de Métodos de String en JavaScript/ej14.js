const contieneProhibida = (texto, palabrasProhibidas) => 
    palabrasProhibidas.some(palabra => texto.includes(palabra));


console.log(contieneProhibida("Este mensaje contiene spam", ["spam", "virus"])); // true
