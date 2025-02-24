const asignarCategoria = (personas) => {
    return personas.map(persona => {
        
        if (persona.edad < 12) {
            persona.categoria = "Infantil";
        } else if (persona.edad >= 12 && persona.edad <= 17) {
            persona.categoria = "Adolescente";
        } else {
            persona.categoria = "Adulto";
        }
        return persona;
    });
};

const personas = [
    { nombre: "Juan", edad: 10 },
    { nombre: "Ana", edad: 15 },
    { nombre: "Luis", edad: 25 },
    { nombre: "María", edad: 8 },
];

const personasConCategoria = asignarCategoria(personas);
console.log(personasConCategoria);
