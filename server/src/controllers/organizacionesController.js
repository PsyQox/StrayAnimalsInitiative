const { Organizacion } = require('../models');

// Obtener información sobre organizaciones que ayudan a animales
async function obtenerOrganizaciones(req, res) {
  try {
    const organizaciones = await Organizacion.findAll();
    res.json(organizaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la información de las organizaciones' });
  }
}

module.exports = {
  obtenerOrganizaciones,
};
