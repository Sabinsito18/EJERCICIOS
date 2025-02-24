import { agregarEmpleado, calcularSumaTotalDeHoras, filtrarEmpleadosMasDe40Horas, ordenarEmpleadosPorHoras, empleados } from './empleados.js';

agregarEmpleado("Juan Pérez", 45);
agregarEmpleado("Ana Gómez", 38);
agregarEmpleado("Carlos Rodríguez", 50);
agregarEmpleado("Sofía Díaz", 42);

console.log("Suma total de horas trabajadas:", calcularSumaTotalDeHoras());

console.log("Empleados que trabajaron más de 40 horas:");
console.log(filtrarEmpleadosMasDe40Horas());

ordenarEmpleadosPorHoras();
console.log("Empleados ordenados por horas trabajadas:");
console.log(empleados);
