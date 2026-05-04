const jugador = {
 nombre: "Luna",
 puntaje: 1500
};


localStorage.setItem("datosJugador", JSON.stringify(jugador));


const jugadorRecuperado = JSON.parse(localStorage.getItem("datosJugador"));

console.log("Objeto recuperado:", jugadorRecuperado);
console.log("Nombre del jugador:", jugadorRecuperado.nombre);