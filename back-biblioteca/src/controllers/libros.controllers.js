/* Crear controlador */
const LibrosController = {}

/* Importar modelo */
const Libro = require('../models/libros.models');

/* Funciones CRUD */

/* Todos los libros */
LibrosController.getLibros = async (req, res) => {
    const libros = await Libro.find();
    res.json(libros);
}

/* Algún libro */
LibrosController.getLibro = async (req, res) => {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
}

/* Crear libro */
LibrosController.createLibro = async (req, res) => {
    const newLibro = new Libro(req.body);
    await newLibro.save();
    res.send({ message: 'Libro creado' });
}

/* Actualizar libro */
LibrosController.updateLibro = async (req, res) => {
    await Libro.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'Libro actualizado'})
}

/* Borrar libro */
LibrosController.deleteLibro = async (req, res) => { 
   await Libro.findByIdAndRemove(req.params.id);
   res.json({status: 'Libro eliminado'});


}

module.exports = LibrosController;