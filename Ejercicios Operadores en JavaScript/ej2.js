const calcularDiferencias = (obj) => {
    // Restar b de a usando el operador
    obj.a -= obj.b;

    // Multiplica a por 3 y divide b entre 2
    obj.a *= 3;
    obj.b /= 2;

    return obj;
};

const objetoOriginal = { a: 10, b: 4 };
const objetoModificado = calcularDiferencias(objetoOriginal);

console.log("Objeto Original:", objetoOriginal);  
console.log("Objeto Modificado:", objetoModificado);  