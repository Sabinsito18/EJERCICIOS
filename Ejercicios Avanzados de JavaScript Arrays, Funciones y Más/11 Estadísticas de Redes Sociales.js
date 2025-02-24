const publicaciones = [
    { likes: 50, comentarios: 10 },
    { likes: 200, comentarios: 30 },
    { likes: 120, comentarios: 20 }
  ];
  
  const totalLikes = publicaciones.reduce((acc, publicacion) => acc + publicacion.likes, 0);
  console.log('Total de likes:', totalLikes);
  
  const publicacionesPopulares = publicaciones.filter(publicacion => publicacion.likes > 100);
  console.log('Publicaciones con más de 100 likes:', publicacionesPopulares);
  
  const publicacionesOrdenadas = publicaciones.sort((a, b) => b.likes - a.likes);
  console.log('Publicaciones ordenadas por popularidad:', publicacionesOrdenadas);
  