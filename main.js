const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let puntos = 0;

boton.addEventListener("click", function () {
  puntos += 10;
  mensaje.textContent = "Puntaje: " + puntos;
});