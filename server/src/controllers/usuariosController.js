const { Usuario } = require('../models');

// Registrar un nuevo usuario en la plataforma
async function registrarUsuario(req, res) {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al registrar el usuario' });
  }
}

// Iniciar sesión en la plataforma
async function iniciarSesion(req, res) {
  // Lógica de inicio de sesión aquí
  // Puedes implementar tu lógica de autenticación aquí y devolver un token si es exitoso
  res.status(200).json({ message: 'Inicio de sesión exitoso' });
}

module.exports = {
  registrarUsuario,
  iniciarSesion,
};
