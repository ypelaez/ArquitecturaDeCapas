
class Jugador {
    constructor(nombre) {
      this.nombre = nombre;
      this.personaje = null;
    }
  
    elegirPersonaje(personaje) {
      this.personaje = personaje;
      console.log(`${this.nombre} ha elegido a ${this.personaje.nombre}`);
    }
  
    atacar() {
      if (this.personaje) {
        this.personaje.atacar();
      } else {
        console.log('No se ha elegido ningún personaje');
      }
    }
  }
  
  module.exports = { Jugador };
  