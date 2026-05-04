const mensaje = document.getElementById("mensaje");


// agregar elementos
mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");

// quitar último elemento
mochila.pop();

// mostrar en pantalla
mensaje.textContent = "Mochila final: " + mochila.join(", ");