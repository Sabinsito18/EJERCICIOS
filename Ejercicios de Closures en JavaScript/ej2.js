function crearPrefijo(prefijo) {
    return function(palabra) {
        return prefijo + palabra; 
};
}

const prefijoRe = crearPrefijo("re");
console.log(prefijoRe("cargar")); 

const prefijoIn = crearPrefijo("in");
console.log(prefijoIn("visible")); 
console.log(prefijoIn("creíble")); 
