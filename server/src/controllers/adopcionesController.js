const { Adopcion } = require('../models');

// Obtener la lista de perros y gatos disponibles para adopción
async function obtenerAdopciones(req, res) {
  try {
    const adopciones = await Adopcion.findAll();
    res.json(adopciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las adopciones' });
  }
}

// Publicar información sobre un perro o gato para su adopción
async function publicarAdopcion(req, res) {
  try {
    const nuevaAdopcion = await Adopcion.create(req.body);
    res.status(201).json(nuevaAdopcion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al publicar la adopción' });
  }
}

module.exports = {
  obtenerAdopciones,
  publicarAdopcion,
};
