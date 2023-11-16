const express = require('express');
const bodyParser = require('body-parser');
const adopcionesRoutes = require('./routes/adopciones');
const ayudaRoutes = require('./routes/ayuda');
const organizacionesRoutes = require('./routes/organizaciones');
const tumascotaRoutes = require('./routes/tumascota');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Usar las rutas
app.use('/adopciones', adopcionesRoutes);
app.use('/ayuda', ayudaRoutes);
app.use('/organizaciones', organizacionesRoutes);
app.use('/tumascota', tumascotaRoutes);
app.use('/usuarios', usuariosRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
