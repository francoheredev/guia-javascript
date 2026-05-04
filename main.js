const mensaje = document.getElementById("mensaje");

let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += ronda * 10;
  
}

mensaje.textContent = "Puntaje total: " + puntajeTotal;