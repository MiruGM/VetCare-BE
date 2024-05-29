// Importar la librería express -> web server
const express = require('express');
// Importar la librería CORS 
const cors = require('cors');
// Importar la librería path -> manejar rutas de ficheros en el servidor
const path = require('path');
// Importar los gestores de rutas
const clientRoutes = require('./routes/clientRoutes');
const veterinarianRoutes = require('./routes/veterinarianRoutes');
const petRoutes = require('./routes/petRoutes');
const treatmentRoutes = require('./routes/treatmentRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const loginRoutes = require('./routes/loginRoutes');

const app = express();
const port = process.env.PORT || 3000;

//Configurar el middleware para analizar el JSON en las solicitudes. 
app.use(express.json());

//Configurar CORS para admitir cualquier origen de las peticiones. 
app.use(cors());

//Configurar las rutas de la API Rest
app.use('/api/clients', clientRoutes);
app.use('/api/veterinarians', veterinarianRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/treatments', treatmentRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/login', loginRoutes);

//Configurar el middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para manejas las solicitudes al archivo index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Iniciar el servidor 
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})
