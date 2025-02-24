const manipularContador = (contador) => {
    if (contador.valor % 2 === 0) {
        contador.valor += 2;  
    } else {
        contador.valor -= 1; 
    }
    return contador;
};

let miContador = { valor: 5 }; 
console.log(manipularContador(miContador));  

miContador = { valor: 7 }; 
console.log(manipularContador(miContador));  
