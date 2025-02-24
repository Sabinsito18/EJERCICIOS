const filtrarCorreosPorDominio = (correos, dominio) => {
    return correos.filter(correo => correo.endsWith(dominio));
};

const emails = [
    "juan@empresa.com",
    "maria@gmail.com",
    "carlos@empresa.com",
    "ana@hotmail.com",
    "luis@empresa.org"
];

console.log(filtrarCorreosPorDominio(emails, "@gmail.com"));

