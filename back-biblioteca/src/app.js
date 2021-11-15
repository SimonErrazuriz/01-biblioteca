/* Lógica y configuración general */

/* Importar express: Para crear rutas y realizar peticiones http */
const express = require('express')
/* Importar morgan:  */
const morgan = require('morgan');
/* Importar enrutador */
const router = require('./routes/libros.routes');
/* Importar CORS */
const cors = require('cors');

/* Para usar express */
const app = express();

/* Define el puerto (falta la variable de entorno)  */
app.set("port", 3000);

/* Middlewares: Procesa algo antes de que termine */
/* Permisos CORS */
app.use(cors());

/* Manda la petición por consola */
app.use(morgan('dev'));

/* Para que entienda json */
app.use(express.json());

/* Para que entienda html */
app.use(express.urlencoded({extended: false}));

/* Carga las rutas y crear prefijo */
app.use('/api/', router);






/* Exportar para usar en index.js */
module.exports = app;
