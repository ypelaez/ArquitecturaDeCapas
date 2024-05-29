
# Arquitectura de 3 Capas - Desarrollo Videojuego

## Descripción

Este proyecto consiste en un juego que simula la interacción entre un jugador y diversos tipos de enemigos. El jugador puede elegir entre diferentes enemigos terrestres y aéreos, cada uno con sus propias habilidades de ataque. Existen funcionalidades para la creación de enemigos y registro de ataques. La arquitectura utilizada es una arquitectura en 3 capas, que se describe a continuación.

## Requisitos

- Lenguaje: JavaScript
- Entorno de desarrollo: Visual Studio Code
- Node.js

## Estructura del Proyecto

## Principios SOLID

1. **Single Responsibility Principle (SRP):**
- *Cada clase tiene una única responsabilidad. Por ejemplo:*
     - `attackAdapter.js` adapta ataques.
     - `enemyFactory.js` crea enemigos.
     - `attackObserver.js` maneja eventos de ataque.

2. **Open/Closed Principle (OCP):**
- Las clases están abiertas para extensión pero cerradas para modificación. Se puede agregar nuevos tipos de enemigos o adaptadores sin cambiar el código existente.
- `enemy.js` permite agregar nuevos enemigos sin modificar las clases existentes.

3. **Liskov Substitution Principle (LSP):**
- Las clases derivadas (`Goomba`, `Koopa`, `Boo`) pueden ser usadas donde se espera una instancia de su clase base (`enemy.js`) sin alterar el comportamiento esperado.

4. **Interface Segregation Principle (ISP):**
- Aunque JavaScript no utiliza interfaces específicas, las clases están diseñadas para tener métodos específicos según sus responsabilidades.

5. **Dependency Inversion Principle (DIP):**
- Las clases de alto nivel (`userInterface.js`) dependen de abstracciones (`enemyService.js`, `playerService.js`), no de clases concretas.


## Patrones de Diseño

1. **Factory Method:**
- Utilizado en `enemyFactory.js` para crear instancias de diferentes tipos de enemigos (`Goomba`, `Koopa`, `Boo`).

2. **Adapter:**
- Utilizado en `attackAdapter.js` para adaptar los ataques de los enemigos de tipo `Boo` a ataques aéreos.

3. **Observer:**
- Utilizado en `attackObserver.js` para registrar y notificar eventos de ataque.

## Arquitectura en 3 Capas

- **Capa de Acceso a Datos:** 
  - Directorio: `datos`
  - Esta capa se encarga de la gestión de los datos y la creación de los enemigos. Implementa patrones de diseño como Factory Method, Adapter y Observer para manejar la creación, adaptación y observación de los enemigos y sus ataques.

- **Capa de Lógica de Negocio:** 
  - Directorio: `negocio`
  - Esta capa contiene la lógica central de la aplicación, gestionando las operaciones del jugador y los enemigos. Implementa las reglas de negocio y coordina las actividades entre las diferentes partes de la aplicación.

- **Capa de Presentación:**
  - Directorio: `presentacion`
  - Esta capa es responsable de la interacción con el usuario. En este caso, se utiliza una interfaz de línea de comandos (CLI) para mostrar un menú y capturar las opciones del usuario.
    - Mostrar el menú de opciones al usuario.
    - Capturar la entrada del usuario.
    - Llamar a los servicios de negocio según la opción seleccionada por el usuario.
    - Mostrar los resultados de las acciones realizadas.

## Guía de Instalación

1. **Instalar Node.js:**

   Descarga e instala Node.js desde [nodejs.org](https://nodejs.org/).

2. **Clonar el repositorio:**

   ```sh
   git clone https://github.com/ypelaez/ArquitecturaDeCapas.git
   cd ArquitecturaDeCapas

3. **Instalar las dependencias:**

    ```sh
    npm install

4. **Ejecutar el proyecto:**

    ```sh
    node src/main/js/main.js

<img src="./src/img/boo.png" width=100>
<img src="./src/img/goomba.png" width=100>
<img src="./src/img/koopa.png" width=100>
