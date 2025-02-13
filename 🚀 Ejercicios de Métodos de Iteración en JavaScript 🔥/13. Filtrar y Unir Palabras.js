const words = ['apple', 'banana', 'avocado', 'cherry', 'apricot'];

const resultado = words.filter(word => word[0] === 'a').join(',');
console.log(resultado);