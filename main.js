const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const vida = Number(input.value);

  if (isNaN(vida)) {
    mensaje.textContent = "Ingresá un valor válido";
  } else if (vida > 70) {
    mensaje.textContent = "Jugador en buen estado";
  } else if (vida >= 30) {
    mensaje.textContent = "Jugador herido";
  } else if (vida >= 1) {
    mensaje.textContent = "Jugador en peligro";
  } else if (vida === 0) {
    mensaje.textContent = "Game Over";
  } else {
    mensaje.textContent = "Valor de vida inválido";
  }
});