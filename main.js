const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  const numero = Number(valor);

  if (isNaN(numero)) {
    mensaje.textContent = "Ingresá un número válido";
  } else {
    const resultado = numero + 10;
    mensaje.textContent = "Resultado: " + resultado;
  }
});