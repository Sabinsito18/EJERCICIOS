const libros = [
    { titulo: 'JavaScript Avanzado', autor: 'Juan Pérez', año: 2019 },
    { titulo: 'JavaScript Básico', autor: 'Carlos López', año: 2008 }
  ];
  
  const librosDespues2010 = libros.filter(libro => libro.año > 2010);
  console.log('Libros publicados después de 2010:', librosDespues2010);
  
  const autorBuscado = 'Juan Pérez';
  const primerLibroAutor = libros.find(libro => libro.autor === autorBuscado);
  console.log('Primer libro de', autorBuscado, ':', primerLibroAutor);
  
  const librosOrdenados = libros.sort((a, b) => b.año - a.año);
  console.log('Libros ordenados por año de publicación:', librosOrdenados);
  