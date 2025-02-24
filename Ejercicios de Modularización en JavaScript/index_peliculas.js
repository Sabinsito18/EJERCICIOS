import { agregarPelicula, buscarPeliculasPorGenero, obtenerTitulosComoString, ordenarPeliculasPorDuracion, peliculas } from './peliculas.js';

agregarPelicula("Inception", 148, "Ciencia ficción");
agregarPelicula("The Dark Knight", 152, "Acción");
agregarPelicula("Pulp Fiction", 154, "Crimen");
agregarPelicula("Interstellar", 169, "Ciencia ficción");

console.log("Películas de Ciencia ficción:", buscarPeliculasPorGenero("Ciencia ficción"));
console.log("Títulos de películas disponibles:", obtenerTitulosComoString());

ordenarPeliculasPorDuracion();
console.log("Películas ordenadas por duración:", peliculas);
