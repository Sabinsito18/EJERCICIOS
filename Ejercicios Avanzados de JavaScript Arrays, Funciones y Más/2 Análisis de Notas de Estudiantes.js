class AnalisisNotas {
    constructor() {
      this.estudiantes = [];
    }
  
    agregarEstudiante(nombre, nota) {
      this.estudiantes.push({ nombre, nota });
    }
  
    obtenerAprobados() {
      return this.estudiantes.filter(estudiante => estudiante.nota >= 6);
    }
  
    calcularNotaMedia() {
      const totalNotas = this.estudiantes.reduce((acc, estudiante) => acc + estudiante.nota, 0);
      return this.estudiantes.length ? totalNotas / this.estudiantes.length : 0;
    }
  
    ordenarPorNota() {
      return this.estudiantes.sort((a, b) => b.nota - a.nota);
    }
  }
  
  const analisis = new AnalisisNotas();
  analisis.agregarEstudiante('Juan', 8);
  analisis.agregarEstudiante('Ana', 5);
  analisis.agregarEstudiante('Carlos', 7);
  
  console.log("Estudiantes que aprobaron:", analisis.obtenerAprobados());
  console.log("Nota media de la clase:", analisis.calcularNotaMedia());
  console.log("Estudiantes ordenados por nota:", analisis.ordenarPorNota());