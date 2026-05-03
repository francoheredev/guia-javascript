const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const edad = Number(input.value);

  if (isNaN(edad)) {
    mensaje.textContent = "Ingresá una edad válida";
  } else if (edad >= 13) {
    mensaje.textContent = "Puede jugar";
  } else {
    mensaje.textContent = "No puede jugar todavía";
  }
});