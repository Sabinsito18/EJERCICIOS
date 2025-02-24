const nombres = ['Ana', 'Juan', 'Pedro', 'Andrés'];

const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase());
console.log(nombresMayusculas); 


const nombresConA = nombresMayusculas.filter(nombre => nombre.startsWith('A'));
console.log(nombresConA); 


const nombresOrdenados = nombresConA.sort();
console.log(nombresOrdenados); 
