export const mensajes = [];

export const agregarMensaje = (remitente, texto) => {
    mensajes.push({ remitente, texto });
};

export const filtrarMensajesPorUsuario = (usuario) => {
    return mensajes.filter(mensaje => mensaje.remitente === usuario);
};
