const { agregarPedido, eliminarPrimerPedido, contarPedidos, buscarPedidoPorCliente, obtenerNombresDePlatillos, hayPedidoDePlatillo } = require('./pedidos');

agregarPedido(1, "Carlos", "Pizza");
agregarPedido(2, "Laura", "Sushi");
agregarPedido(3, "Pedro", "Hamburguesa");

console.log("Pedidos actuales:", contarPedidos());
console.log("Pedido de Laura:", buscarPedidoPorCliente("Laura"));
console.log("Platillos en los pedidos:", obtenerNombresDePlatillos());
console.log("¿Hay pedidos de Sushi?", hayPedidoDePlatillo("Sushi"));

eliminarPrimerPedido();
console.log("Pedidos después de eliminar el primero:", contarPedidos());
