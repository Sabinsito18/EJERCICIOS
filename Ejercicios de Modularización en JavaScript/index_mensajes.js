import { agregarMensaje, filtrarMensajesPorUsuario, mensajes } from './mensajes.js';

agregarMensaje("Carlos", "Hola, ¿cómo estás?");
agregarMensaje("Ana", "¡Hola, todo bien!");
agregarMensaje("Carlos", "¿Te gustaría salir este fin de semana?");
agregarMensaje("Luis", "¿Ya compraste los boletos para el cine?");
agregarMensaje("Carlos", "Aún no, ¿te gustaría ir el sábado?");

console.log("Mensajes de Carlos:");
console.log(filtrarMensajesPorUsuario("Carlos"));
