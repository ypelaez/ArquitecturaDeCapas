// src/main/java/com/example/presentacion/userInterface.js

const { AdaptadorAtaqueAereo } = require('../datos/attackAdapter');

class UserUI {
  constructor(servicioEnemigo) {
    this.servicioEnemigo = servicioEnemigo;
    this.enemigoActual = null;
    this.stdin = process.openStdin();
  }

  start() {
    this.stdin.addListener('data', (d) => {
      const input = d.toString().trim();
      this.handleInput(input);
    });
    this.showMenu();
  }

  showMenu() {
    console.log('\n1. Crear enemigo aleatorio');
    console.log('2. Atacar con enemigo');
    console.log('3. Salir\n');
  }

  handleInput(input) {
    switch (input) {
      case '1':
        this.crearEnemigoAleatorio();
        break;
      case '2':
        this.atacarConEnemigo();
        break;
      case '3':
        console.log('Saliendo...');
        process.exit();
        break;
      default:
        console.log('Opción no válida. Inténtalo de nuevo.');
    }
    this.showMenu(); // Muestra el menú después de procesar la entrada
  }

  crearEnemigoAleatorio() {
    const enemigoAleatorio = this.servicioEnemigo.crearEnemigoAleatorio();
    console.log(`Enemigo creado: ${enemigoAleatorio.nombre}`);
    this.enemigoActual = enemigoAleatorio;
  }

  atacarConEnemigo() {
    if (this.enemigoActual) {
      const adaptadorAereo = new AdaptadorAtaqueAereo(this.enemigoActual);
      adaptadorAereo.atacar();
    } else {
      console.log('No hay ningún enemigo creado. Crea un enemigo primero.');
    }
  }
}

module.exports = { UserUI };