const inventario1 = [
    { nombre: 'Laptop', cantidad: 10, precio: 800 },
    { nombre: 'Teclado', cantidad: 20, precio: 30 }
  ];
  
  const inventario2 = [
    { nombre: 'Ratón', cantidad: 15, precio: 10 },
    { nombre: 'Monitor', cantidad: 5, precio: 200 }
  ];
  
  function añadirNuevoProducto(inventario, producto) {
    const nuevoInventario = [...inventario, producto]; 
    console.log('Producto añadido:', producto);
    return nuevoInventario;
  }
  
  function actualizarElPrecio(inventario, nombreProducto, nuevoPrecio) {
    const inventarioActualizado = inventario.map(producto => 
      producto.nombre === nombreProducto ? { ...producto, precio: nuevoPrecio } : producto
    );
    console.log(`Precio de ${nombreProducto} actualizado a ${nuevoPrecio}`);
    return inventarioActualizado;
  }
  
  function eliminarProductosConStockCero(inventario) {
    const inventarioFiltrado = inventario.filter(producto => producto.cantidad > 0);
    console.log('Inventario después de eliminar productos con stock 0:', inventarioFiltrado);
    return inventarioFiltrado;
  }
  
  function combinarInventarios(inventario1, inventario2) {
    const combinacion = [...inventario1, ...inventario2];
    const inventarioSinDuplicados = Array.from(new Set(combinacion.map(producto => producto.nombre)))
      .map(nombre => combinacion.find(producto => producto.nombre === nombre));
    console.log('Inventario combinado sin duplicados:', inventarioSinDuplicados);
    return i
  }