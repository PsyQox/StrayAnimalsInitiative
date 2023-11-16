const express = require('express');
const organizacionesController = require('../controllers/organizacionesController');
const router = express.Router();

// Obtener información sobre organizaciones que ayudan a animales
router.get('/', organizacionesController.obtenerOrganizaciones);

module.exports = router;
