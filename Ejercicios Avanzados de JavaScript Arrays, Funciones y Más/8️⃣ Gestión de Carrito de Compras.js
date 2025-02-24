const carrito = [
    { producto: 'Laptop', precio: 800 },
    { producto: 'Ratón', precio: 20 }
  ];
  
  carrito.push({ producto: 'Teclado', precio: 50 });
  console.log('Carrito después de añadir Teclado:', carrito);
  
  carrito.pop();
  console.log('Carrito después de eliminar el último producto:', carrito);
  
  
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);
  console.log('Precio total del carrito:', total);
  
  const carritoOrdenado = carrito.slice().sort((a, b) => a.precio - b.precio);
  console.log('Carrito ordenado por precio:', carritoOrdenado);
  