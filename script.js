function calcularFactorial(n) {
  if (n < 0) return "No definido";
  if (n === 0) return 1;
  
  let resultado = BigInt(1);
  for (let i = BigInt(n); i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

const numeroInput = document.getElementById("numeroInput");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoDiv = document.getElementById("resultado");

function manejarCalculo() {
  resultadoDiv.classList.remove("error");

  const valorInput = numeroInput.value;

  if (valorInput === "") {
    resultadoDiv.textContent = "Por favor, introduce un número.";
    resultadoDiv.classList.add("error");
    return;
  }
  
  const numero = parseInt(valorInput, 10);

  if (isNaN(numero) || numero < 0) {
    resultadoDiv.textContent = "Error: Debes introducir un número entero y positivo.";
    resultadoDiv.classList.add("error");
    return;
  }

  const factorial = calcularFactorial(numero);
  
  resultadoDiv.innerHTML = `El factorial de <strong>${numero}</strong> es: <strong>${factorial.toLocaleString('es-MX')}</strong>`;
}


calcularBtn.addEventListener("click", manejarCalculo);

numeroInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    calcularBtn.click();
  }
});
