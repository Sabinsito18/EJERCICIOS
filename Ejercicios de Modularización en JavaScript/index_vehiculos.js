import { agregarVehiculo, buscarVehiculosPorMarca, ordenarVehiculosPorAño, vehiculos } from './vehiculos.js';

agregarVehiculo("Toyota", "Corolla", 2020);
agregarVehiculo("Honda", "Civic", 2018);
agregarVehiculo("Ford", "Focus", 2022);
agregarVehiculo("Toyota", "Camry", 2021);

console.log("Vehículos de marca Toyota:");
console.log(buscarVehiculosPorMarca("Toyota"));

console.log("Vehículos ordenados por año:");
ordenarVehiculosPorAño();
console.log(vehiculos);
