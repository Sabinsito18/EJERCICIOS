const validarPropiedades = (obj, claves) => {
    const propiedadesObjeto = Object.keys(obj);
    for (let i in claves) {
        if (!propiedadesObjeto.includes(claves[i])) {
            return false; 
        }
    }
    
    return true;
};

console.log(validarPropiedades({ nombre: "Juan", edad: 30, ciudad: "Madrid" }, ["nombre", "edad"])); 

console.log(validarPropiedades({ nombre: "Juan", edad: 30 }, ["nombre", "ciudad"])); 

