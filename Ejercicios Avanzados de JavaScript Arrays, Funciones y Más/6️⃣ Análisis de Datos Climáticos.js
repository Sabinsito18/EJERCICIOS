const temperaturas = [22, 28, 18, 15, 32, 25];

const tempMax = Math.max(...temperaturas);
const tempMin = Math.min(...temperaturas);
console.log(`Temperatura más alta: ${tempMax}°C`);
console.log(`Temperatura más baja: ${tempMin}°C`);

const media = temperaturas.reduce((acc, temp) => acc + temp, 0) / temperaturas.length;
console.log(`Temperatura media: ${media.toFixed(2)}°C`);

const temperaturasAltas = temperaturas.filter(temp => temp > media);
console.log('Temperaturas por encima de la media:', temperaturasAltas);

const temperaturasFahrenheit = temperaturas.map(temp => (temp * 9/5) + 32);
console.log('Temperaturas en Fahrenheit:', temperaturasFahrenheit);
