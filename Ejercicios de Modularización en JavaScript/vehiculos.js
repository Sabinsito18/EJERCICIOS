export const vehiculos = [];

export const agregarVehiculo = (marca, modelo, año) => {
    vehiculos.push({ marca, modelo, año });
};

export const buscarVehiculosPorMarca = (marca) => vehiculos.filter(vehiculo => vehiculo.marca === marca);

export const ordenarVehiculosPorAño = () => vehiculos.sort((a, b) => b.año - a.año);
