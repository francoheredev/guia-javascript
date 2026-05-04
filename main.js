const mensaje = document.getElementById("mensaje");

mensaje.innerHTML = `
Nombre: ${jugador.nombre} <br>
Vida: ${jugador.vida} <br>
Energía: ${jugador.energia} <br>
Nivel: ${jugador.nivel} <br>
Inventario: ${jugador.inventario.join(", ")}
`;