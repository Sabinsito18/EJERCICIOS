function invertirObjeto(objeto) {
    let invertido = {};
    let claves = Object.keys(objeto); 

    for (let i in claves) { 
        let clave = claves[i]; 
        invertido[objeto[clave]] = clave; 
    }

    return invertido;
}

console.log(invertirObjeto({ a: "uno", b: "dos", c: "tres" })); 

