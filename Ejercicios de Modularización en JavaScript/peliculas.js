export const peliculas = [];

export const agregarPelicula = (titulo, duracion, genero) => {
    peliculas.push({ titulo, duracion, genero });
};

export const buscarPeliculasPorGenero = (genero) => peliculas.filter(pelicula => pelicula.genero === genero);

export const obtenerTitulosComoString = () => peliculas.map(pelicula => pelicula.titulo).join(", ");

export const ordenarPeliculasPorDuracion = () => peliculas.sort((a, b) => a.duracion - b.duracion);
