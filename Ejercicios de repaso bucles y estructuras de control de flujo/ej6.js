//Ejercicio 6: Suma de Números del 1 al N
let N = 5; 
let suma = 0;
let num = 1;

while (num <= N) {
    suma += num;
    num++;
}
console.log(`La suma de los números del 1 al ${N} es: ${suma}`);