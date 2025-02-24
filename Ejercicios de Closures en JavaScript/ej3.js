function crearCuentaBancaria() {
    let saldo = 0; 

    return {
        depositar: function(monto) {
            if (monto > 0) {
                saldo += monto;
                console.log(`Depósito exitoso: +$${monto}. Saldo actual: $${saldo}`);
            } else {
                console.log("El monto a depositar debe ser mayor que 0.");
            }
        },

        retirar: function(monto) {
            if (monto > 0 && monto <= saldo) {
                saldo -= monto;
                console.log(`Retiro exitoso: -$${monto}. Saldo actual: $${saldo}`);
            } else {
                console.log("Fondos insuficientes o monto inválido.");
            }
        },

        consultarSaldo: function() {
            console.log(`Saldo actual: $${saldo}`);
            return saldo;
        }
    };
}

const miCuenta = crearCuentaBancaria();
miCuenta.consultarSaldo(); 
miCuenta.depositar(100);   
miCuenta.retirar(50);      
miCuenta.retirar(100);     
miCuenta.consultarSaldo();
