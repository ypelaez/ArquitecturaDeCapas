
const { ServicioEnemigo } = require('./example.com/negocio/enemyService');
const { UserUI } = require('./example.com/presentacion/userInterface');

// Inicializar servicios
const servicioEnemigo = new ServicioEnemigo();

// Inicializar interfaz de usuario
const userUI = new UserUI(servicioEnemigo);

// Iniciar la aplicación
userUI.start();