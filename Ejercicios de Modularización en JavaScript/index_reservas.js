import { agregarReserva, ordenarReservasPorFecha, reservas } from './reservas.js';

agregarReserva("Carlos Pérez", "2025-03-15");
agregarReserva("Ana Gómez", "2025-02-20");
agregarReserva("Luis Díaz", "2025-02-18");
agregarReserva("Maria López", "2025-04-10");

console.log("Reservas ordenadas por fecha:");
ordenarReservasPorFecha();
console.log(reservas);
