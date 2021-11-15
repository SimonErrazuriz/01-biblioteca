/* Importar mongoose */
const mongoose = require('mongoose');

/* Conectarse a la bbdd */
mongoose
    .connect('mongodb://localhost/biblioteca')
    .then(db => console.log('Conectado a la base de datos'))
    .catch(err => console.error(err));