const { agregarProyecto, filtrarProyectosEnProgreso, ordenarPorPrioridad, eliminarUltimoProyecto, convertirProyectosAString } = require('./proyectos');

agregarProyecto("Página Web", "En progreso", 2);
agregarProyecto("App Móvil", "Pendiente", 3);
agregarProyecto("Base de datos", "En progreso", 1);

console.log("Proyectos en progreso:", filtrarProyectosEnProgreso());

ordenarPorPrioridad();
console.log("Proyectos ordenados por prioridad:", convertirProyectosAString());

eliminarUltimoProyecto();
console.log("Lista de proyectos después de eliminar el último:", convertirProyectosAString());
