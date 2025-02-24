const alumnos = [];

const agregarAlumno = (nombre, notas) => {
    alumnos.push({ nombre, notas });
};

const calcularPromedio = () => alumnos.map(alumno => {
    const sumaNotas = alumno.notas.reduce((acc, nota) => acc + nota, 0);
    const promedio = sumaNotas / alumno.notas.length;
    return { nombre: alumno.nombre, promedio };
});

const filtrarAlumnosAprobados = () => alumnos.filter(alumno => {
    const promedio = alumno.notas.reduce((acc, nota) => acc + nota, 0) / alumno.notas.length;
    return promedio >= 6;  // Consideramos aprobado con un promedio de 6 o más
});

const ordenarAlumnosPorPromedio = () => {
    return calcularPromedio().sort((a, b) => a.promedio - b.promedio);
};

const buscarAlumnoPorNombre = (nombre) => alumnos.find(alumno => alumno.nombre === nombre);

module.exports = { agregarAlumno, calcularPromedio, filtrarAlumnosAprobados, ordenarAlumnosPorPromedio, buscarAlumnoPorNombre, alumnos };
