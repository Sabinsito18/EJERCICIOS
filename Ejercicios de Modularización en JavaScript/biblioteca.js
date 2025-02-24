const libros = [];

const agregarLibro = (titulo, autor, genero) => {
    libros.push({ titulo, autor, genero });
};

const buscarLibroPorAutor = (nombreAutor) => libros.find(libro => libro.autor === nombreAutor);

const obtenerListaDeTitulos = () => libros.map(libro => libro.titulo);

const hayLibrosDeGenero = (nombreGenero) => libros.map(libro => libro.genero).includes(nombreGenero);

const ordenarLibrosAlfabeticamente = () => libros.sort((a, b) => a.titulo.localeCompare(b.titulo));

const filtrarLibrosPorGenero = (nombreGenero) => libros.filter(libro => libro.genero === nombreGenero);

module.exports = { agregarLibro, buscarLibroPorAutor, obtenerListaDeTitulos, hayLibrosDeGenero, ordenarLibrosAlfabeticamente, filtrarLibrosPorGenero, libros };
