const modificarInventario = (productos) => {
    return productos.map(producto => {
        // Si el precio es menor a 20 aumenta un 15%
        if (producto.precio < 20) {
            producto.precio *= 1.15;
        }
        // Si el precio es mayor o igual a 50 disminuye un 10%
        else if (producto.precio >= 50) {
            producto.precio *= 0.90;
        }
        
        return producto;
    });
};

const inventario = [
    { nombre: "Producto 1", precio: 18 },
    { nombre: "Producto 2", precio: 55 },
    { nombre: "Producto 3", precio: 30 },
    { nombre: "Producto 4", precio: 12 },
    { nombre: "Producto 5", precio: 70 }
];

const inventarioModificado = modificarInventario(inventario);

console.log("Inventario Original:", inventario);
console.log("Inventario Modificado:", inventarioModificado);
