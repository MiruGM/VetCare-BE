//Función de logging
const { logMessage } = require('../utils/logger.js');

//Método de creación de objetos de respuesta
const Response = require('../utils/response.js');

//Método para recuperar los modelos
const initializeModels = require('../config/db.js');

//Recuperar el modelo mascota
const models = initializeModels();
const Pet = models.pet;

//CONTROLADORES DE MASCOTA
//Obtener todas las mascotas
exports.getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(Response.success(pets, 'Datos de mascotas recuperados'));
  } catch (error) {
    logMessage(error.message);
    res.status(500).json(
      Response.error(null, 'Error al recuperar los datos: ', req.originalUrl)
    );
  }
};

//Obtener una mascota por su id
exports.getPetById = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findByPk(id);
    if (pet) {
      res.json(Response.success(pet, 'Datos de la mascota recuperados'));
    } else {
      res.status(404).json(Response.error(null, 'Mascota no encontrada'));
    }
  } catch (error) {
    res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
  }
};

//Crear una mascota nueva 
exports.createPet = async (req, res) => {
  const { registrationNumber, name, birthDate, sex, type, species, breed, clientId } = req.body;
  try {
    const newPet = await Pet.create({ registrationNumber, name, birthDate, sex, type, species, breed, clientId });
    res.json(Response.success(newPet, 'Mascota creada correctamente'));
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(null, 'Error al crear la mascota'));
  }
};

//Actualizar una mascota por su id
exports.updatePet = async (req, res) => {
  const { id } = req.params;
  const { registrationNumber, name, birthDate, type, species, breed } = req.body;
  try {
    const pet = await Pet.findByPk(id);
    if (pet) {
      pet.registrationNumber = registrationNumber;
      pet.name = name;
      pet.birthDate = birthDate;
      pet.type = type;
      pet.species = species;
      pet.breed = breed;
      await pet.save();
      res.json(Response.success(pet, 'Mascota actualizada correctamente'));
    } else {
      res.status(404).json(Response.error(null, 'Mascota no encontrada'));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json(Response.error(null, 'Error al actualizar la mascota'));
  }
};

//Eliminar una mascota por su id
exports.deletePet = async (req, res) => {
  const { id } = req.params;
  try {
    const pet = await Pet.findByPk(id);
    if (pet) {
      await pet.destroy();
      res.json(response.success(pet, 'Mascota eliminada correctamente'));
    } else {
      res.status(404).json(Response.error(null, 'Mascota no encontrada'));
    }
  } catch (error) {
    res.status(500).json(Response.error(null, 'Error al eliminar la mascota'));
  }
}; 