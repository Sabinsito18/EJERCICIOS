//Ejercicio 6: Suma de Números del 1 al N
let N = 5; 
let suma = 0;
let numero = 1;

while (numero <= N) {
    suma += numero;
    numero++;
}
console.log(`La suma de los números del 1 al ${N} es: ${suma}`);