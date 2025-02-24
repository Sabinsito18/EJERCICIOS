const { agregarLibro, buscarLibroPorAutor, obtenerListaDeTitulos, hayLibrosDeGenero, ordenarLibrosAlfabeticamente, filtrarLibrosPorGenero } = require('./biblioteca');

agregarLibro("Cien años de soledad", "Gabriel García Márquez", "Novela");
agregarLibro("1984", "George Orwell", "Distopía");
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula");
agregarLibro("Fahrenheit 451", "Ray Bradbury", "Distopía");

console.log("Lista de títulos:", obtenerListaDeTitulos());

console.log("Buscar libro de George Orwell:", buscarLibroPorAutor("George Orwell"));

console.log("¿Hay libros de Distopía?", hayLibrosDeGenero("Distopía"));

ordenarLibrosAlfabeticamente();
console.log("Libros ordenados alfabéticamente:", obtenerListaDeTitulos());

console.log("Libros de género Distopía:", filtrarLibrosPorGenero("Distopía"));
