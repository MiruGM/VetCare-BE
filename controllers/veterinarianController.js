//Función de logging
const { logMessage } = require('../utils/logger.js');

//Método de creación de objetos de respuesta
const Response = require('../utils/response.js');

// Método para recuperar los modelos
const initializeModels = require('../config/db.js');

//REcuperar el modelo veterinario
const models = initializeModels();
const Veterinarian = models.veterinarian;



//CONTROLADORES DE veterinario
//Obtener todas las veterinarios
exports.getAllVeterinarians = async (req, res) => {
  try {
    const veterinarians = await Veterinarian.findAll();
    res.json(Response.success(veterinarians, 'Datos de veterinarios recuperados'));
  } catch (error) {
    logMessage(error.message);
    res.status(500).json(
      Response.error(null, 'Error al recuperar los datos: ', req.originalUrl)
    );
  }
};

//Obtener una veterinario por su id
exports.getVeterinarianById = async (req, res) => {
  const { id } = req.params;
  try {
    const veterinarian = await Veterinarian.findByPk(id);
    if (veterinarian) {
      res.json(Response.success(veterinarian, 'Datos del veterinario recuperados'));
    } else {
      res.status(404).json(Response.error(null, 'Veterinario no encontrado'));
    }
  } catch (error) {
    res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
  }
};

//Obtener todos los veterinarios por su especialidad
exports.getAllVeterinariansBySpeciality = async (req, res) => {
  const { speciality } = req.params;
  try {
    const veterinarians = await Veterinarian.findAll({
      where: { speciality: speciality }
    });
    if (veterinarians.length > 0) {
      res.json(Response.success(veterinarians, 'Datos de veterinarios recuperados'));
    } else {
      res.status(404).json(Response.error(null, 'Veterinarios no encontrados'));
    }
  } catch (error) {
    res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
  }
};

//Crear un veterinario nuevo. 
exports.createVeterinarian = async (req, res) => {
  const { registrationNumber, name, email, password, speciality, admin } = req.body;
  try {
    const newVeterinarian = await Veterinarian.create({ registrationNumber, name, email, password, speciality, admin });
    res.status(201).json(Response.success(newVeterinarian, 'Veterinario creado correctamente'));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(null, 'Error al crear el veterinario'));
  }
};

//Actualizar un veterinario por id
exports.updateVeterinarian = async (req, res) => {
  const { id } = req.params;
  const { registrationNumber, name, email, password, speciality } = req.body;
  try {
    const veterinarian = await Veterinarian.findByPk(id);
    if (veterinarian) {
      veterinarian.registrationNumber = registrationNumber;
      veterinarian.name = name;
      veterinarian.email = email;
      veterinarian.password = password;
      veterinarian.speciality = speciality;
      await veterinarian.save();
      res.json(Response.success(veterinarian, 'Veterinario actualizado correctamente'));
    } else {
      res.status(404).json(Response.error(null, 'Veterinario no encontrado'));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(null, 'Error al actualizar el veterinario'));
  }
};

//Eliminar un veterinario por id
exports.deleteVeterinarian = async (req, res) => {
  const { id } = req.params;
  try {
    const veterinarian = await Veterinarian.findByPk(id);
    if (veterinarian) {
      await veterinarian.destroy();
      res.json(Response.success(veterinarian, 'Veterinario eliminado correctamente'));
    } else {
      res.status(404).json(Response.error(null, 'Veterinario no encontrado'));
    }
  } catch (error) {
    res.status(500).json(Response.error(null, 'Error al eliminal el veterinario'));
  }
};

//TODO: OTRO TIPO DE PETICIÓN FILTRADA(COLEGIATURA, ESPECIALIDAD, ETC.)