export const productos = [];

export const agregarProducto = (nombre, calificaciones) => {
    productos.push({ nombre, calificaciones });
};

export const calcularPromedioDeCalificaciones = (nombreProducto) => {
    const producto = productos.find(p => p.nombre === nombreProducto);
    if (producto) {
        const sumaCalificaciones = producto.calificaciones.reduce((total, calificacion) => total + calificacion, 0);
        return sumaCalificaciones / producto.calificaciones.length;
    } else {
        return "Producto no encontrado";
    }
};
