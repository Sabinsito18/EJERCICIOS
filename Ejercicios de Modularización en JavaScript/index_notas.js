import { agregarNota, filtrarNotasUrgentes, ordenarNotasPorPrioridad, buscarNotaPorTitulo, notas } from './notas.js';

agregarNota("Reunión con cliente", "Urgente");
agregarNota("Llamar al proveedor", "Media");
agregarNota("Revisar presupuesto", "Alta");
agregarNota("Limpiar escritorio", "Baja");

console.log("Notas urgentes:");
console.log(filtrarNotasUrgentes());

console.log("Notas ordenadas por prioridad:");
ordenarNotasPorPrioridad();
console.log(notas);

console.log("Buscar nota por título (Reunión con cliente):");
console.log(buscarNotaPorTitulo("Reunión con cliente"));
