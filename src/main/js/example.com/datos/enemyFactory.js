
const { Enemigo, Goomba, Koopa, Boo } = require('./enemy');

class FabricaEnemigos {
  crearEnemigo(tipo) {
    switch (tipo) {
      case 'Goomba':
        return new Goomba();
      case 'Koopa':
        return new Koopa();
      case 'Boo':
        return new Boo();
      default:
        throw new Error('Tipo de enemigo no válido');
    }
  }

  crearEnemigoAleatorio() {
    const tiposEnemigos = ['Goomba', 'Koopa', 'Boo'];
    const indiceAleatorio = Math.floor(Math.random() * tiposEnemigos.length);
    return this.crearEnemigo(tiposEnemigos[indiceAleatorio]);
  }
}

module.exports = { FabricaEnemigos };
