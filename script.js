// --- La función de cálculo de factorial no necesita cambios ---
/**
 * Calcula el factorial de un número.
 * @param {number} n - El número de entrada.
 * @returns {number|BigInt} El factorial de n. Usamos BigInt para números grandes.
 */
function calcularFactorial(n) {
  if (n < 0) return "No definido"; // No debería pasar por la validación previa, pero es una buena práctica.
  if (n === 0) return 1;
  
  // Usamos BigInt para evitar problemas con números grandes (ej: 21!)
  // que exceden el límite de Number.MAX_SAFE_INTEGER.
  let resultado = BigInt(1);
  for (let i = BigInt(n); i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

// --- Lógica de la interfaz de usuario ---

// 1. Obtener referencias a los elementos del DOM que vamos a usar.
const numeroInput = document.getElementById("numeroInput");
const calcularBtn = document.getElementById("calcularBtn");
const resultadoDiv = document.getElementById("resultado");

/**
 * Función que se ejecuta al hacer clic en el botón.
 */
function manejarCalculo() {
  // Limpiamos clases de error previas
  resultadoDiv.classList.remove("error");

  // 2. Obtener el valor del input y convertirlo a número.
  const valorInput = numeroInput.value;

  // Validar si el campo está vacío
  if (valorInput === "") {
    resultadoDiv.textContent = "Por favor, introduce un número.";
    resultadoDiv.classList.add("error");
    return;
  }
  
  const numero = parseInt(valorInput, 10);

  // 3. Validar la entrada.
  if (isNaN(numero) || numero < 0) {
    resultadoDiv.textContent = "Error: Debes introducir un número entero y positivo.";
    resultadoDiv.classList.add("error");
    return;
  }

  // 4. Si la entrada es válida, calcular y mostrar el resultado.
  const factorial = calcularFactorial(numero);
  
  resultadoDiv.innerHTML = `El factorial de <strong>${numero}</strong> es: <strong>${factorial.toLocaleString('es-MX')}</strong>`;
}


// 5. Asignar el evento 'click' al botón.
// La función manejarCalculo solo se ejecutará cuando se haga clic.
calcularBtn.addEventListener("click", manejarCalculo);

// (Opcional) Permitir calcular al presionar "Enter" en el campo de texto.
numeroInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    // Simula un clic en el botón para ejecutar la misma lógica.
    calcularBtn.click();
  }
});
