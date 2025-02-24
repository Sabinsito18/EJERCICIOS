const alternarMayusculas = (texto) => {
    return texto.split('')
                .map((letra, i) => i % 2 === 0 ? letra.toUpperCase() : letra.toLowerCase())
                .join('');
};


console.log(alternarMayusculas("javascript"));
