const suma = (a, b) => a + b;

const resta = (a, b) => a - b;

const division = (a, b) => {
  const resto = a % b;
  let contador = 0;

  while (a > resto) {
    contador++;
    a = resta(a, b);
  }

  return contador;
};

console.log(`division `, division(5, 2));

const multiplicacion = (a, b) => {
  let n = 0;

  b % 2 !== 0 ? (n = division(b, 2) + 1) : (n = division(b, 2));

  let acum = 0;

  for (let index = 0; index < n; index++) {
    if (n > 1) {
      acum += suma(a, a);
      n -= 1;
    }

    if (n === 1) {
      acum += resta(suma(a, a), a);
    }
  }

  return acum;
};

console.log(`multiplicacion `, multiplicacion(5, 5));
