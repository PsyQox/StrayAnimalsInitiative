const { MascotaUsuario } = require('../models'); 

// Obtener información sobre la propia mascota registrada
async function obtenerTuMascota(req, res) {
  try {
    const mascotasUsuario = await MascotaUsuario.findAll();
    res.json(mascotasUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la información de tu mascota' });
  }
}

module.exports = {
  obtenerTuMascota,
};
