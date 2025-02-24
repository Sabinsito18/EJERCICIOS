function crearContador() {
    let contador = 0; 
    
    return function() {
        return ++contador; 
    };
}

const contador1 = crearContador();
console.log(contador1()); 
console.log(contador1()); 
console.log(contador1()); 

const contador2 = crearContador();
console.log(contador2()); 
console.log(contador2()); 