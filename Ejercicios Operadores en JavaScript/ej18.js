const listaDeInvitados = (n, confirmaciones) => {
    return n.filter((nombre, i) => confirmaciones[i] === true);
};


const n = ["Ana", "Luis", "Carlos", "María", "Juan", "Pedro", "Pablo", "Carmen"];
const confirmaciones = [true, false, true, true, false, true, true, false];

const invitadosConfirmados = listaDeInvitados(n, confirmaciones);

console.log(invitadosConfirmados);

