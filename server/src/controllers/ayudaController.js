const { SolicitudAyuda } = require('../models');

// Obtener solicitudes de ayuda para perros y gatos
async function obtenerSolicitudesAyuda(req, res) {
  try {
    const solicitudesAyuda = await SolicitudAyuda.findAll();
    res.json(solicitudesAyuda);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las solicitudes de ayuda' });
  }
}

// Crear una solicitud de ayuda para un perro o gato
async function crearSolicitudAyuda(req, res) {
  try {
    const nuevaSolicitud = await SolicitudAyuda.create(req.body);
    res.status(201).json(nuevaSolicitud);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la solicitud de ayuda' });
  }
}

module.exports = {
  obtenerSolicitudesAyuda,
  crearSolicitudAyuda,
};
