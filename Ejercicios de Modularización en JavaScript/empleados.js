export const empleados = [];

export const agregarEmpleado = (nombre, horasTrabajadas) => {
    empleados.push({ nombre, horasTrabajadas });
};

export const calcularSumaTotalDeHoras = () => empleados.reduce((total, empleado) => total + empleado.horasTrabajadas, 0);

export const filtrarEmpleadosMasDe40Horas = () => empleados.filter(empleado => empleado.horasTrabajadas > 40);

export const ordenarEmpleadosPorHoras = () => empleados.sort((a, b) => b.horasTrabajadas - a.horasTrabajadas);
