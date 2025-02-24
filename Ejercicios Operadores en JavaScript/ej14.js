const transformarNiveles = (usuarios) => {
    return usuarios.map(usuario => {
      
        if (usuario.nivel === "básico") {
            usuario.nivel = "intermedio";
        } else if (usuario.nivel === "intermedio") {
            usuario.nivel = "avanzado";
        }
        return usuario;
    });
};

const usuarios = [
    { usuario: "Juan", nivel: "básico" },
    { usuario: "Ana", nivel: "intermedio" },
    { usuario: "Luis", nivel: "básico" },
    { usuario: "María", nivel: "intermedio" },
];

const usuariosTransformados = transformarNiveles(usuarios);
console.log(usuariosTransformados);

