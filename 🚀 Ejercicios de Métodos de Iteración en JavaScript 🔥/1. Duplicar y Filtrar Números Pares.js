const numbers = [3, 7, 12, 5, 9, 20, 15];

const duplicados = numbers.map(num => num * 2);
console.log(duplicados); 

const resultado = duplicados.filter(num => num > 20 && num % 2 === 0);
console.log(resultado);