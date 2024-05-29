//Función de logging 
const { logMessage } = require('../utils/logger.js');

//Método de creación de objetos de respuesta
const Response = require('../utils/response.js');

//Método para recuperar los modelos
const initializeModels = require('../config/db.js');

//Recuperar el modelo tratamiento
const models = initializeModels();
const Treatment = models.treatment;

//CONTROLADORES DE TRATAMIENTO
//Obtener todos los tratamientos
exports.getAllTreatments = async (req, res) => {
    try {
        const treatments = await Treatment.findAll();
        res.json(Response.success(treatments, 'Datos de tratamientos recuperados'));
    } catch (error) {
        logMessage(error.message);
        res.status(500).json(
            Response.error(null, 'Error al recuperar los datos: ', req.originalUrl)
        );
    }
};

//Obtener un tratamiento por su id
exports.getTreatmentById = async (req, res) => {
    const { id } = req.params;
    try {
        const treatment = await Treatment.findByPk(id);
        if (treatment) {
            res.json(Response.success(treatment, 'Datos del tratamiento recuperados'));
        } else {
            res.status(404).json(Response.error(null, 'Tratamiento no encontrado'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
    }
};

//Crear un tratamiento nuevo 
exports.createTreatment = async (req, res) => {
    const { reason, name, description, duration, meds, frequency, price, followUp, appointmentId } = req.body;
    try {
        const newTreatment = await Treatment.create({ reason, name, description, duration, meds, frequency, price, followUp, appointmentId });
        res.status(201).json(Response.success(newTreatment, 'Tratamiento creado correctamente'));
    } catch (error) {
        console.error(error);
        res.status(500).json(Response.error(null, 'Error al crear el tratamiento'));
    }
};

//Actualizar un tratamiento por su id
exports.updateTreatment = async (req, res) => {
    const { id } = req.params;
    const { reason, name, description, duration, meds, frequency, price, followUp } = req.body;
    try {
        const treatment = await Treatment.findByPk(id);
        if (treatment) {
            treatment.reason = reason;
            treatment.name = name;
            treatment.description = description;
            treatment.duration = duration;
            treatment.meds = meds;
            treatment.frequency = frequency;
            treatment.price = price;
            treatment.followUp = followUp;
            await treatment.save();
            res.json(Response.success(treatment, 'Tratamiento actualizado correctamente'));
        } else {
            res.status(404).json(Response.error(null, 'Tratamiento no encontrado'));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(Response.error(null, 'Error al actualizar el tratamiento'));
    }
};

//Eliminar un tratamiento por su id
exports.deleteTreatment = async (req, res) => {
    const { id } = req.params;
    try {
        const treatment = await Treatment.findByPk(id);
        if (treatment) {
            await treatment.destroy();
            res.json(Response.success(treatment, 'Tratamiento eliminado correctamente'));
        } else {
            res.status(404).json(Response.error(null, 'Tratamiento no encontrado'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al eliminar el tratamiento'));
    }
};