const obtenerIniciales = (nombres) => {
    return nombres.map(nombre => 
        nombre.split(' ') 
              .map(palabra => palabra[0].toUpperCase()) 
              .join('') 
    );
};


const nombres = ["Juan Pérez", "María López García", "Carlos Ortega", "ana morales"];
console.log(obtenerIniciales(nombres)); 

