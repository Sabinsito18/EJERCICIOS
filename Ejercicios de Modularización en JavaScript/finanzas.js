export const transacciones = [];

export const registrarIngreso = (monto) => {
    transacciones.push({ tipo: 'ingreso', monto });
};

export const registrarGasto = (monto) => {
    transacciones.push({ tipo: 'gasto', monto });
};

export const calcularSaldoTotal = () => {
    const totalIngresos = transacciones.filter(t => t.tipo === 'ingreso').reduce((total, t) => total + t.monto, 0);
    const totalGastos = transacciones.filter(t => t.tipo === 'gasto').reduce((total, t) => total + t.monto, 0);
    return totalIngresos - totalGastos;
};
