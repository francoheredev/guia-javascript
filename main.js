const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  mensaje.textContent = "";

  for (let i = 3; i >= 1; i--) {
    setTimeout(() => {
      mensaje.textContent = i;
    }, (3 - i) * 1000);
  }

  setTimeout(() => {
    mensaje.textContent = "¡Comienza!";
  }, 3000);
});