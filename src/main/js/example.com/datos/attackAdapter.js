
const { Boo } = require('./enemy');

class AdaptadorAtaqueAereo {
  constructor(enemigo) {
    this.enemigo = enemigo;
  }

  atacar() {
    if (this.enemigo instanceof Boo) {
      console.log('Adapter: Ataque aéreo');
      this.enemigo.atacar();
    } else {
      console.log('Adapter: No se puede realizar un ataque aéreo');
    }
  }
}

module.exports = { AdaptadorAtaqueAereo };
