const alumnos = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 17 }
  ];

  function agregarAlumno(nombre, edad) {
    const nuevoAlumno = { nombre, edad };
    const alumnosActualizados = [...alumnos, nuevoAlumno]; 
    console.log('Alumno añadido:', nuevoAlumno);
    return alumnosActualizados;
  }
  
  function actualizarAlumno(nombre, nuevaEdad) {
    const alumnosActualizados = alumnos.map(alumno =>
      alumno.nombre === nombre ? { ...alumno, edad: nuevaEdad } : alumno
    );
    console.log(`Información de ${nombre} actualizada.`);
    return alumnosActualizados;
  }
  
  function contarMayoresDe18() {
    const mayoresDe18 = alumnos.filter(alumno => alumno.edad > 18);
    console.log('Cantidad de alumnos mayores de 18 años:', mayoresDe18.length);
    return mayoresDe18.length;
  }
  
  const alumnosActualizados = agregarAlumno('Pedro', 22);
  const alumnosActualizados2 = actualizarAlumno('Ana', 18);
  contarMayoresDe18();
  