
const { FabricaEnemigos } = require('../datos/enemyFactory');

class ServicioEnemigo {
  constructor() {
    this.fabricaEnemigos = new FabricaEnemigos();
  }

  crearEnemigoAleatorio() {
    return this.fabricaEnemigos.crearEnemigoAleatorio();
  }
}

module.exports = { ServicioEnemigo };
