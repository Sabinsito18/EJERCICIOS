const modificarArray = (arr) => {
    return arr.map((num, index) => {
        // Multiplica los números en posiciones pares por 2 y los impares por 3
        let nuevoValor = index % 2 === 0 ? num * 2 : num * 3;

        // Resta 5 a los números mayores de 10
        if (nuevoValor > 10) {
            nuevoValor -= 5;
        }

        return nuevoValor;
    });
};


const arrayOriginal = [1, 5, 12, 3, 8, 15, 10];
const arrayModificado = modificarArray(arrayOriginal);

console.log("Array Original:", arrayOriginal);
console.log("Array Modificado:", arrayModificado);
