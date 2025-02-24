function crearLogger() {
    let historial = []; 

    return {
        registrar: function(mensaje) {
            const tiempo = new Date().toLocaleTimeString();
            historial.push(`[${tiempo}] ${mensaje}`);
            console.log(`Mensaje registrado: ${mensaje}`);
        },
        obtenerHistorial: function() {
            return [...historial];  
        }
    };
}


const logger = crearLogger();

logger.registrar("Inicio del sistema");
logger.registrar("Usuario autenticado");

console.log(logger.obtenerHistorial());

