boton.addEventListener("click", function () {
  const nombre = input.value.trim();

  if (nombre === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
  } else {
    mensaje.textContent = "Bienvenido/a, " + nombre;
  }
});