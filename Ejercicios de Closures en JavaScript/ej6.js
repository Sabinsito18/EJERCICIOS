function crearContador() {
    let contador = 0; 

    return {
        incrementar: function() {
            return ++contador; 
        },
        reset: function() {
            contador = 0; 
            console.log("Contador reiniciado.");
        },
        consultar: function() {
            return contador; 
        }
    };
}

const contador = crearContador();

console.log(contador.incrementar()); 
console.log(contador.incrementar()); 
console.log(contador.consultar());   
contador.reset();                    
console.log(contador.incrementar()); 
