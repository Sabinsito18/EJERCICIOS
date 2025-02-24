const formatearNombresDeUsuario = (correos) => {
    return correos.map(correo => {
        let nombreUsuario = correo.split('@')[0];
        return nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1).toLowerCase();
    });  
};

const emails = [
    "juan_perez@empresa.com",
    "MARIA123@gmail.com",
    "carlos.ortega@outlook.com",
    "ANA_M@empresa.com"
];
console.log(formatearNombresDeUsuario(emails));