const calcularTotalCompra = (productos) => {
   
    return productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
};


const productos = [
    { nombre: "Laptop", precio: 1500, cantidad: 2 },
    { nombre: "Teclado", precio: 50, cantidad: 3 },
    { nombre: "Monitor", precio: 300, cantidad: 1 },
];

const totalCompra = calcularTotalCompra(productos);
console.log(totalCompra);  
