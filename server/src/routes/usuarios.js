const express = require('express');
const usuariosController = require('../controllers/usuariosController');
const router = express.Router();

// Registrar un nuevo usuario en la plataforma
router.post('/registro', usuariosController.registrarUsuario);

// Iniciar sesión en la plataforma
router.post('/login', usuariosController.iniciarSesion);

module.exports = router;
