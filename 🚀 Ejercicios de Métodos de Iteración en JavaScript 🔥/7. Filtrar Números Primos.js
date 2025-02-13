const numbers = [2, 4, 5, 6, 7, 8, 9, 11, 13];

const esPrimo = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primos = numbers.filter(esPrimo);
console.log(primos); 
