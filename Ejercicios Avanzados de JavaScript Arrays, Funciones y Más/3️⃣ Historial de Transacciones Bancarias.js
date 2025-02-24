class HistorialTransacciones {
    constructor() {
      this.transacciones = [];
    }
  
    agregarTransaccion(monto) {
      this.transacciones.push(monto);
    }
  
    calcularSaldoTotal() {
      return this.transacciones.reduce((acc, transaccion) => acc + transaccion, 0);
    }
  
    filtrarTransaccionesMayoresA(valor) {
      return this.transacciones.filter(transaccion => transaccion > valor);
    }
  
    invertirOrdenTransacciones() {
      const invertido = [];
      for (let i = this.transacciones.length - 1; i >= 0; i--) {
        invertido.push(this.transacciones[i]);
      }
      return invertido;
    }
  }
  
  const historial = new HistorialTransacciones();
  historial.agregarTransaccion(200);
  historial.agregarTransaccion(-50);
  historial.agregarTransaccion(-100);
  historial.agregarTransaccion(350);
  historial.agregarTransaccion(-20);
  
  console.log("Saldo total:", historial.calcularSaldoTotal());
  console.log("Transacciones mayores a 100:", historial.filtrarTransaccionesMayoresA(100));
  console.log("Transacciones en orden inverso:", historial.invertirOrdenTransacciones());
  