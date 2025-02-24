const contarCaracteres = (texto) => {
    let contador = {};

    for (let i in texto) {
        let char = texto[i]; 

        contador[char] = contador[char] ? contador[char] + 1 : 1;
    }

    return contador;
};

console.log(contarCaracteres("programacion"));
