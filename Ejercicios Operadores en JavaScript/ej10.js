const registrarAsistencia = (estudiantes) => {
    const asistencia = {};  

    estudiantes.forEach((estudiante) => {
        
        asistencia[estudiante] = true; 
    });

    return asistencia;
};


const estudiantes = ["Juan", "Maria", "Carlos", "Ana"];
const registroAsistencia = registrarAsistencia(estudiantes);
console.log(registroAsistencia);  

