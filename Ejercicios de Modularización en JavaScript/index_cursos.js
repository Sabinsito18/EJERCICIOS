import { agregarCurso, ordenarCursosPorCantidadDeInscritos, obtenerNombresDeCursos, cursos } from './cursos.js';

agregarCurso("Desarrollo Web", 150);
agregarCurso("Inteligencia Artificial", 200);
agregarCurso("Marketing Digital", 100);
agregarCurso("Diseño Gráfico", 75);

console.log("Cursos ordenados por cantidad de inscritos:");
ordenarCursosPorCantidadDeInscritos();
console.log(cursos);

console.log("Lista de nombres de cursos:");
console.log(obtenerNombresDeCursos());
