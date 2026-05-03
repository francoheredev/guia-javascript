const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const opcion = input.value.toLowerCase();

  switch (opcion) {
    case "iniciar":
      mensaje.textContent = "Iniciando juego...";
      break;

    case "configuracion":
      mensaje.textContent = "Abriendo configuración...";
      break;

    case "creditos":
      mensaje.textContent = "Mostrando créditos...";
      break;

    case "salir":
      mensaje.textContent = "Saliendo del juego...";
      break;

    default:
      mensaje.textContent = "Opción inválida";
  }
});