const contactos1 = ['Juan', 'Carlos', 'Ana'];
const contactos2 = ['Ana', 'Pedro', 'Luis'];

const contactosCombinados = [...new Set([...contactos1, ...contactos2])];

const contactosOrdenados = contactosCombinados.sort();

console.log(contactosOrdenados); 
