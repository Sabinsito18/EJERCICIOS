function crearGeneradorId() {
    const idsGenerados = new Set(); 

    return function() {
        let id;
        do {
            id = `${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
        } while (idsGenerados.has(id)); 

        idsGenerados.add(id); 
        return id;
    }
}

const generadorId = crearGeneradorId();

console.log(generadorId());
console.log(generadorId()); 
console.log(generadorId()); 
