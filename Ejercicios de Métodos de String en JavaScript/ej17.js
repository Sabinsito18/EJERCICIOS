const generarUsuarios = (nombres) => {
    return nombres.map(nombreCompleto => {
        let [nombre, apellido] = nombreCompleto.split(" ");
        return `${nombre[0].toLowerCase()}${apellido.toLowerCase()}`;
    });
};


console.log(generarUsuarios(["Juan Pérez", "María López"]));
