const proyectos = [];

const agregarProyecto = (nombre, estado, prioridad) => {
    proyectos.push({ nombre, estado, prioridad });
};

const filtrarProyectosEnProgreso = () => proyectos.filter(p => p.estado === "En progreso");

const ordenarPorPrioridad = () => proyectos.sort((a, b) => a.prioridad - b.prioridad);

const eliminarUltimoProyecto = () => proyectos.pop();

const convertirProyectosAString = () => proyectos.map(p => `${p.nombre} - ${p.estado} (Prioridad: ${p.prioridad})`).toString();


module.exports = { agregarProyecto, filtrarProyectosEnProgreso, ordenarPorPrioridad, eliminarUltimoProyecto, convertirProyectosAString, proyectos };
