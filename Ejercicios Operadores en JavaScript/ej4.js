const filtrarUsuarios = (usuarios) => {
    return usuarios.filter(usuario => usuario.edad >= 18 && usuario.activo);
};

const usuarios = [
    { nombre: "Juan", edad: 25, activo: true },
    { nombre: "Ana", edad: 17, activo: true },
    { nombre: "Carlos", edad: 30, activo: false },
    { nombre: "María", edad: 22, activo: true },
    { nombre: "Pedro", edad: 18, activo: true }
];

const usuariosFiltrados = filtrarUsuarios(usuarios);

console.log("Usuarios Filtrados:", usuariosFiltrados);
