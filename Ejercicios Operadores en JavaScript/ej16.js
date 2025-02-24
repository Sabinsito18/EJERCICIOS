const modificarArray = (numeros) => {
    return numeros.map(num => num < 0 ? 0 : num);
};

const arrayNumeros = [-5, 10, -3, 7, -1, 4];
const arrayModificado = modificarArray(arrayNumeros);

console.log(arrayModificado);

