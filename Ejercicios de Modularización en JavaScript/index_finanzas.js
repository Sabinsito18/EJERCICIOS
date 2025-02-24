import { registrarIngreso, registrarGasto, calcularSaldoTotal, transacciones } from './finanzas.js';

registrarIngreso(1500);
registrarIngreso(500);
registrarGasto(200);
registrarGasto(50);

console.log("Transacciones registradas:");
console.log(transacciones);

console.log("Saldo total disponible:");
console.log(calcularSaldoTotal());
