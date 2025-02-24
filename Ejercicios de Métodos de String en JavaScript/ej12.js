const dividirNombres = (nombres) => {
    return nombres.map(nombreCompleto => {
        let [nombre, ...apellido] = nombreCompleto.split(" ");
        return { nombre, apellido: apellido.join(" ") };
    });
};

console.log(dividirNombres(["Juan Pérez", "María López García"]));
