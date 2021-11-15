/* Importar objeto router */
const { Router } = require('express');
/* Importar controlador */
const LibrosController = require('../controllers/libros.controllers');

/* Instanciar objeto router  */
const router = Router();

/* CREAR RUTAS */
router.get('/libros', LibrosController.getLibros);
router.get('/libros/:id', LibrosController.getLibro);
router.post('/libros/', LibrosController.createLibro);
router.put('/libros/:id', LibrosController.updateLibro);
router.delete('/libros/:id', LibrosController.deleteLibro);


module.exports = router;