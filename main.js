// valor de cada empandada en funcion de los ingredientes de cada una

export const fn = (empA, empB, empC) => {
  const costoEmpA = 12;

  const costoEmpB = 14;

  const costoEmpC = 16;

  // calculo del valor de cada empanada multiplicado por cantidad de cada una //

  const total = Math.ceil(
    (empA * costoEmpA + empB * costoEmpB + empC * costoEmpC) / 3
  );

  if (empA < 0 || empB < 0 || empC < 0) {
    throw Error;
  }
  if ((empA + empB + empC) % 3 !== 0) {
    throw Error;
  }
  if (empA + empB + empC > 40) {
    throw Error;
  }
  return total;
};
