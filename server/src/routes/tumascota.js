const express = require('express');
const tumascotaController = require('../controllers/tumascotaController');
const router = express.Router();

// Obtener información sobre la propia mascota registrada por un usuario
router.get('/', tumascotaController.obtenerTuMascota);

module.exports = router;
