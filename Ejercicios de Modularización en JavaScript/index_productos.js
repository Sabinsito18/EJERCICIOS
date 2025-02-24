import { agregarProducto, calcularPromedioDeCalificaciones, productos } from './productos.js';

agregarProducto("Smartphone", [4, 5, 3, 4, 5]);
agregarProducto("Laptop", [5, 4, 4, 5]);
agregarProducto("Auriculares", [3, 2, 4, 3]);

console.log("Promedio de calificaciones del producto Smartphone:");
console.log(calcularPromedioDeCalificaciones("Smartphone"));

console.log("Promedio de calificaciones del producto Laptop:");
console.log(calcularPromedioDeCalificaciones("Laptop"));

console.log("Promedio de calificaciones del producto Auriculares:");
console.log(calcularPromedioDeCalificaciones("Auriculares"));
