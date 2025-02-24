
const tareas = [
    { tarea: 'Comprar leche', completada: false },
    { tarea: 'Estudiar JavaScript', completada: true }
  ];
  
  const listaTareas = document.getElementById('listaTareas');
  const inputTarea = document.getElementById('inputTarea');
  const btnAgregar = document.getElementById('btnAgregar');
  const filtro = document.getElementById('filtro');
  const contador = document.getElementById('contador');
  
  function renderizarTareas() {
    listaTareas.innerHTML = '';
    let tareasFiltradas = tareas;
    
    if (filtro.value === 'pendientes') {
      tareasFiltradas = tareas.filter(t => !t.completada);
    } else if (filtro.value === 'completadas') {
      tareasFiltradas = tareas.filter(t => t.completada);
    }
    
    tareasFiltradas.forEach((t, index) => {
      const li = document.createElement('li');
      li.textContent = t.tarea;
      li.classList.add(t.completada ? 'completada' : 'pendiente');
      li.addEventListener('click', () => marcarComoCompletada(index));
      listaTareas.appendChild(li);
    });
    actualizarContador();
  }
  
  btnAgregar.addEventListener('click', () => {
    const nuevaTarea = inputTarea.value.trim();
    if (nuevaTarea) {
      tareas.push({ tarea: nuevaTarea, completada: false });
      inputTarea.value = '';
      renderizarTareas();
    }
  });
  
  function marcarComoCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    renderizarTareas();
  }
  
  function actualizarContador() {
    const pendientes = tareas.filter(t => !t.completada).length;
    contador.textContent = `Tareas pendientes: ${pendientes}`;
  }
  

  filtro.addEventListener('change', renderizarTareas);
  
  renderizarTareas();