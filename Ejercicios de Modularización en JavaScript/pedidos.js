const pedidos = [];

const agregarPedido = (id, cliente, platillo) => {
    pedidos.push({ id, cliente, platillo });
};

const eliminarPrimerPedido = () => pedidos.shift();

const contarPedidos = () => pedidos.length;

const buscarPedidoPorCliente = (nombreCliente) => pedidos.find(p => p.cliente === nombreCliente);

const obtenerNombresDePlatillos = () => pedidos.map(p => p.platillo);

const hayPedidoDePlatillo = (nombrePlatillo) => pedidos.map(p => p.platillo).includes(nombrePlatillo);

module.exports = { agregarPedido, eliminarPrimerPedido, contarPedidos, buscarPedidoPorCliente, obtenerNombresDePlatillos, hayPedidoDePlatillo, pedidos };
