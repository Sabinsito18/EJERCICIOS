const { agregarAlumno, calcularPromedio, filtrarAlumnosAprobados, ordenarAlumnosPorPromedio, buscarAlumnoPorNombre } = require('./alumnos');

agregarAlumno("Juan", [7, 8, 9]);
agregarAlumno("Ana", [5, 6, 7]);
agregarAlumno("Carlos", [4, 5, 6]);

console.log("Promedios de los alumnos:");
console.log(calcularPromedio());

console.log("Alumnos aprobados:");
console.log(filtrarAlumnosAprobados());

console.log("Alumnos ordenados por promedio:");
console.log(ordenarAlumnosPorPromedio());

console.log("Buscar alumno por nombre (Carlos):");
console.log(buscarAlumnoPorNombre("Carlos"));
