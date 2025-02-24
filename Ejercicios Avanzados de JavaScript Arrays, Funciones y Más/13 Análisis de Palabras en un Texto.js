const texto = 'El sol brilla sobre el cielo azul y brillante';

const palabras = texto.split(' ');
console.log('Array de palabras:', palabras);

const palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log('Palabras con más de 5 letras:', palabrasLargas);

const palabrasOrdenadas = palabrasLargas.sort((a, b) => b.length - a.length);
console.log('Palabras ordenadas por longitud (descendente):', palabrasOrdenadas);
