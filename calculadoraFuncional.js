const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const multiplicacion = (a, b) => {
  return Array.from(Array(b).keys()).reduce((acum) => suma(acum, a), 0);
};

const division = (num, den) => {
  return den === 0
    ? 0
    : resta(num, den) === 0
    ? 1
    : num < den
    ? 0
    : suma(division(resta(num, den), den), 1);
};

console.log(`Suma `, suma(556, 444));

console.log(`Resta `, resta(100, 85));

console.log(`Multiplicacion `, multiplicacion(5, 5));

console.log(`Division `, division(15, 3));
