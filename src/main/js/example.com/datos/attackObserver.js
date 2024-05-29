
class ObservadorAtaque {
    constructor() {
      this.eventos = [];
    }
  
    registrarEvento(evento) {
      this.eventos.push(evento);
    }
  
    actualizar(enemigo) {
      console.log('Evento de ataque detectado');
      this.eventos.forEach(evento => evento.actualizar(enemigo));
    }
  }
  
  class LogAtaque {
    actualizar(enemigo) {
      console.log(`LogAtaque: Registrando ataque de ${enemigo.nombre}`);
    }
  }
  
  module.exports = { ObservadorAtaque, LogAtaque };
  