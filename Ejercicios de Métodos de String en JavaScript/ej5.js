const censurarTexto = (texto, palabrasProhibidas) => {
    return palabrasProhibidas.reduce((textoCensurado, palabra) => {
        const regex = new RegExp(`\\b${palabra}\\b`, 'gi'); 
        return textoCensurado.replace(regex, '*'.repeat(palabra.length));
    }, texto);
};

const texto = "Este es un texto ofensivo y contiene malas palabras.";
const palabras = ["ofensivo", "malas"];

console.log(censurarTexto(texto, palabras));

