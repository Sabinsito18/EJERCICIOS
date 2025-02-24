const participantes = ['Juan', 'Ana', 'Pedro', 'Luis'];

function agregarParticipante(nombre) {
  participantes.push(nombre);
  console.log('Participante añadido:', nombre);
}

function eliminarParticipante(nombre) {
  const index = participantes.indexOf(nombre);
  if (index !== -1) {
    participantes.splice(index, 1);
    console.log('Participante eliminado:', nombre);
  } else {
    console.log('Participante no encontrado:', nombre);
  }
}

function filtrarPorLetra(letra) {
  const resultado = participantes.filter(nombre => nombre.includes(letra));
  console.log(`Participantes con la letra '${letra}':`, resultado);
  return resultado;
}

function listaParticipantes() {
  const participantesCadena = participantes.join(', ');
  console.log('Lista de participantes:', participantesCadena);
  return participantesCadena;
}

agregarParticipante('Carlos');
eliminarParticipante('Pedro');
filtrarPorLetra('a');
listaParticipantes();
