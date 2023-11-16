// routes/ayuda.js
const express = require('express');
const ayudaController = require('../controllers/ayudaController');
const router = express.Router();

// Obtener solicitudes de ayuda para perros y gatos
router.get('/', ayudaController.obtenerSolicitudesAyuda);

// Crear una solicitud de ayuda para un perro o gato
router.post('/', ayudaController.crearSolicitudAyuda);

module.exports = router;
