const mensaje = document.getElementById("mensaje");

let primero = inventario[0];
let ultimo = inventario[inventario.length - 1];
let cantidad = inventario.length;

mensaje.textContent =
  "Primer objeto: " + primero +
  " | Último objeto: " + ultimo +
  " | Cantidad: " + cantidad;