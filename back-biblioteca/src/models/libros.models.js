/* Importar Schema y model de mongoose */
const { Schema, model } = require('mongoose');

/* Crear nuevo esquema */
const LibroSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    genre: {type: String, required: true},
    editorial: {type: String, required: true},
    year: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
});

/* Exportar */
module.exports = model('Libro', LibroSchema);