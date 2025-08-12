function calcularFactorial(n) {
  if (n === 0) {
    return 1;
  }

  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i; 
  }
  return resultado;
}

function iniciarCalculo() {
  const contenedorResultado = document.getElementById("resultado");
  let numeroValido = false;
  let numero;

  while (!numeroValido) {
    const entradaUsuario = prompt("Por favor, introduce un número entero para calcular su factorial:");

    if (entradaUsuario === null) {
      contenedorResultado.innerHTML = "<p>Operación cancelada por el usuario.</p>";
      console.log("Operación cancelada por el usuario.");
      return;
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

  contenedorResultado.innerHTML = `El factorial de <strong>${numero}</strong> es: <strong>${factorial}</strong>`;

  console.log(`El factorial de ${numero} es: ${factorial}`);
}

iniciarCalculo();
