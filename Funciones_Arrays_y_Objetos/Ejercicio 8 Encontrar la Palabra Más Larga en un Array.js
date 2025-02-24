const palabraMasLarga = (array) => {
    let palabra_Larga = "";

    array.forEach(palabra => {
        if (palabra.length > palabra_Larga.length) {
            palabra_Larga = palabra;
        }
    });

    return palabra_Larga;
};

console.log(palabraMasLarga(["sol", "estrella", "planeta", "galaxia"]));