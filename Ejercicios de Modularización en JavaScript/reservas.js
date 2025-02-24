export const reservas = [];

export const agregarReserva = (nombre, fecha) => {
    reservas.push({ nombre, fecha });
};

export const ordenarReservasPorFecha = () => {
    reservas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
};
