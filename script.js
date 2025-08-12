function calcularFactorial(n) {
  // El factorial de 0 es 1.
  if (n === 0) {
    return 1;
  }

  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i; // es lo mismo que resultado = resultado * i;
  }
  return resultado;
}


function iniciarCalculo() {
  let numeroValido = false;
  let numero;

  while (!numeroValido) {
    const entradaUsuario = prompt("Por favor, introduce un número entero para calcular su factorial:");

    if (entradaUsuario === null) {
      console.log("Operación cancelada por el usuario.");
      return; // Sale de la función iniciarCalculo
    }
    
    const numeroTemporal = parseInt(entradaUsuario);

    if (!isNaN(numeroTemporal) && numeroTemporal >= 0) {
      numero = numeroTemporal;
      numeroValido = true;
    } else {
      alert("Error: Debes introducir un número entero y positivo. Inténtalo de nuevo.");
    }
  }

  const factorial = calcularFactorial(numero);

  console.log(`El factorial de ${numero} es: ${factorial}`);
  alert(`El factorial de ${numero} es: ${factorial}. \n(Resultado también en la consola)`);
}
iniciarCalculo();
