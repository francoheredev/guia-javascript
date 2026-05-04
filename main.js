const personajesFuertes = personajes.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);