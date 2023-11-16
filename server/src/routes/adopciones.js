// routes/adopciones.js
const express = require('express');
const adopcionesController = require('../controllers/adopcionesController');
const router = express.Router();

// Obtener la lista de perros y gatos disponibles para adopción
router.get('/', adopcionesController.obtenerAdopciones);

// Publicar información sobre un perro o gato para su adopción
router.post('/', adopcionesController.publicarAdopcion);

module.exports = router;
