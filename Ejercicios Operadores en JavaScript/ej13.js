const eliminarMenoresDe18 = (personas) => {
   
    return personas.filter(persona => persona.edad >= 18);
};

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 15 },
];

const personasFiltradas = eliminarMenoresDe18(personas);
console.log(personasFiltradas);  

