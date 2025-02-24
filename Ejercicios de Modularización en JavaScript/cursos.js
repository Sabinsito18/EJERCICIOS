export const cursos = [];

export const agregarCurso = (nombre, estudiantesInscritos) => {
    cursos.push({ nombre, estudiantesInscritos });
};

export const ordenarCursosPorCantidadDeInscritos = () => cursos.sort((a, b) => b.estudiantesInscritos - a.estudiantesInscritos);

export const obtenerNombresDeCursos = () => cursos.map(curso => curso.nombre);
