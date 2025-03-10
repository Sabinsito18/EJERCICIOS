function mostrarEstudiantes(estudiantes) {
    estudiantes.forEach(estudiante => {
        console.log(`${estudiante.nombre} tiene ${estudiante.edad} años y está inscrito en el curso de ${estudiante.curso}`);
    });
}

const estudiantes = [
    { nombre: "Laura", edad: 22, curso: "Matemáticas" },
    { nombre: "Carlos", edad: 25, curso: "Física" },
    { nombre: "Marta", edad: 20, curso: "Programación" }
];

mostrarEstudiantes(estudiantes);