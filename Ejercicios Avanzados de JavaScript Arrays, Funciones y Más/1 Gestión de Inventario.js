const inventario = [
    { nombre: 'Laptop', cantidad: 10, precio: 800 },
    { nombre: 'Teclado', cantidad: 50, precio: 20 },
    { nombre: 'Ratón', cantidad: 30, precio: 10 }
  ];

  const gestionInventario = {
    agregarProducto(nombre, cantidad, precio) {
      inventario.push({ nombre, cantidad, precio });
    },
  
    eliminarProducto(nombre) {
      const index = inventario.findIndex(producto => producto.nombre === nombre);
      if (index !== -1) {
        inventario.splice(index, 1);
      }
    },
  
    filtrarPorPrecio(minPrecio) {
      return inventario.filter(producto => producto.precio > minPrecio);
    },
  
    ordenarPorCantidad() {
      return inventario.slice().sort((a, b) => b.cantidad - a.cantidad);
    }
  };
  
  gestionInventario.agregarProducto('Monitor', 15, 150);
  gestionInventario.eliminarProducto('Ratón');
  
  console.log('Inventario actualizado:', inventario);
  console.log('Productos con precio > 50:', gestionInventario.filtrarPorPrecio(50));
  console.log('Productos ordenados por cantidad:', gestionInventario.ordenarPorCantidad());
  