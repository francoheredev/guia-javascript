const mensaje = document.getElementById("mensaje");

function saludarUsuario(nombre) {
  mensaje.textContent = "Bienvenido/a, " + nombre;
}

// llamada de la función
saludarUsuario("Franco");