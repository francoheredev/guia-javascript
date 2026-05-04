const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  // Obtenemos el valor actual del input
  const nombre = input.value;

  // Validamos si el contenido está vacío
  if (nombre === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
  } else {
    // Si tiene texto, mostramos el saludo
    mensaje.textContent = "Bienvenido/a, " + nombre;
  }
});