const validarDisponibilidad = (productos) => {
   
    return productos.every(producto => producto.stock > 0);
};


const productos = [
    { nombre: "Laptop", stock: 10 },
    { nombre: "Teclado", stock: 5 },
    { nombre: "Monitor", stock: 0 },
];

const disponibilidad = validarDisponibilidad(productos);
console.log(disponibilidad);  
