export const notas = [];

export const agregarNota = (titulo, prioridad) => {
    notas.push({ titulo, prioridad });
};

export const filtrarNotasUrgentes = () => notas.filter(nota => nota.prioridad === 'Urgente');

export const ordenarNotasPorPrioridad = () => notas.sort((a, b) => {
    const prioridades = ['Baja', 'Media', 'Alta', 'Urgente'];
    return prioridades.indexOf(a.prioridad) - prioridades.indexOf(b.prioridad);
});

export const buscarNotaPorTitulo = (titulo) => notas.find(nota => nota.titulo === titulo);
