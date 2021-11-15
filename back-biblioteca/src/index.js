/* Para iniciar el servidor, hay que lanzar este archivo por consola */
/* node src/index.js */

/* Importar database */
require('./database');

/* Importar app */
const app = require('./app');

/* Crear servidor en el puerto */
app.listen(app.get("port"));
console.log("Servidor en el puerto", app.get("port"));