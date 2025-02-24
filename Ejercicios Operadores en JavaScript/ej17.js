const transformarNombres = (nombres) => {
    return nombres.map(nombre => {

        const nombreEnMayusculas = nombre.split('').map(caracter => {
            
            if (caracter >= 'a' && caracter <= 'z') {
                return String.fromCharCode(caracter.charCodeAt(0) - 32); 
            }
            return caracter; 
        }).join('');

        return {
            nombre: nombreEnMayusculas,
            longitud: nombre.length
        };
    });
};

const nombresArray = ["Ana", "Luis", "Carlos", "María"];
const resultado = transformarNombres(nombresArray);

console.log(resultado);
