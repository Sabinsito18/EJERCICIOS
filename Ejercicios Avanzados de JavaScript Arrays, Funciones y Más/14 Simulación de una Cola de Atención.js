const cola = ['Juan', 'Ana', 'Carlos'];

function agregarCliente(nombre) {
  cola.push(nombre);
  console.log('Cliente añadido:', nombre);
}

function atenderCliente() {
  const clienteAtendido = cola.shift();
  console.log('Cliente atendido:', clienteAtendido);
  return clienteAtendido;
}

function siguienteCliente() {
  const cliente = cola[0];
  console.log('Siguiente cliente en ser atendido:', cliente);
  return cliente;
}

function contarClientes() {
  console.log('Número de clientes en la cola:', cola.length);
  return cola.length;
}

agregarCliente('Pedro');
atenderCliente();
siguienteCliente();
contarClientes();
