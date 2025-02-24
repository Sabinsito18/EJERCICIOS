export const productos = [];

export const agregarProducto = (nombre, stock) => {
    productos.push({ nombre, stock });
};

export const eliminarProducto = () => productos.pop();

export const filtrarProductosConStockBajo = (limite) => productos.filter(producto => producto.stock < limite);

export const ordenarProductosPorStock = () => productos.sort((a, b) => a.stock - b.stock);
