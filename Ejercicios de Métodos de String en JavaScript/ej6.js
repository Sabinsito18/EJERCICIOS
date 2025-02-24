const formatearNombres = (nombres) => {
    return nombres.map(nombre => 
        nombre.toLowerCase() 
              .replace(/\b\w/g, letra => letra.toUpperCase()) 
    );
};

const nombres = [
    "juan pérez", 
    "MARÍA LÓPEZ", 
    "cArLos oRtEgA", 
    "ana morales"
];
console.log(formatearNombres(nombres));
