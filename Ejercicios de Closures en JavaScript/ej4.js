function crearTemporizador(segundos) {
    let tiempoRestante = segundos; 

    const intervalo = setInterval(() => {
        if (tiempoRestante > 0) {
            tiempoRestante--;
        } else {
            clearInterval(intervalo); 
        }
    }, 1000);

    return function() {
        return tiempoRestante > 0
            ? `Tiempo restante: ${tiempoRestante} segundos`
            : "¡Tiempo terminado!";
    };
}


const temporizador = crearTemporizador(5);

console.log(temporizador()); 
setTimeout(() => console.log(temporizador()), 2000); 
setTimeout(() => console.log(temporizador()), 5000); 
