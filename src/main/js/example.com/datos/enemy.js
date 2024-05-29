
class Enemigo {
    constructor(nombre) {
      this.nombre = nombre;
    }
  
    atacar() {
      console.log(`${this.nombre}: Ataque genérico`);
    }
  }
  
  class Goomba extends Enemigo {
    constructor() {
      super('Goomba');
    }
  
    atacar() {
      console.log('Goomba: Ataque terrestre');
    }
  }
  
  class Koopa extends Enemigo {
    constructor() {
      super('Koopa');
    }
  
    atacar() {
      console.log('Koopa: Ataque terrestre');
    }
  }
  
  class Boo extends Enemigo {
    constructor() {
      super('Boo');
    }
  
    atacar() {
      console.log('Boo: Ataque aéreo');
    }
  }
  
  module.exports = { Enemigo, Goomba, Koopa, Boo };
  