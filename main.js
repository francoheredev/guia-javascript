const mensaje = document.getElementById("mensaje");

if (inventario.includes("llave")) {
  mensaje.textContent = "La puerta se abre";
} else {
  mensaje.textContent = "Necesitás una llave";
}