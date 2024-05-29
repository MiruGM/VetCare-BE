//Función de logging 
const { logMessage } = require('../utils/logger.js');

//Método de creación de objetos de respuesta
const Response = require('../utils/response.js');

//Método para recuperar los modelos
const initializeModels = require('../config/db.js');

//Recuperar el modelo de citas
const models = initializeModels();
const Appointment = models.appointment;
const Treatment = models.treatment;


//CONTROLADORES DE CITA
//Obtener todas las citas
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            include: Treatment,
            order: [['date', 'ASC']]
        });
        res.json(Response.success(appointments, 'Datos de citas recuperados'));
    } catch (error) {
        res.status(500).json(null, 'Error al recuperar los datos: ', req.originalUrl);
    }
};
//Obtener las citas de una mascota por su ID
exports.getAllAppointmentsByPetId = async (req, res) => {
    const { petId } = req.params;
    try {
        const appointments = await Appointment.findAll({
            where: { petId: petId },
            include: Treatment,
            order: [['date', 'DESC']]
        });
        if (appointments.length > 0) {
            res.json(Response.success(appointments, `Datos de las citas de la mascota con ID ${petId} recuperados`));
        } else {
            res.stats(404).json(Response.error(null, 'No se han encontrado citas para la mascota indicada'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
    }
};

//Obtener todas las citas con una fecha concreta. 
exports.getAllAppointmentsByDate = async (req, res) => {
    const { date } = req.params;
    try {
        const appointments = await Appointment.findAll({
            where: { date: date }
        });
        if (appointments.length > 0) {
            res.json(Response.success(appointments, `Datos de citas con fecha ${date} recuperados`));
        } else {
            res.status(404).json(Response.error(null, 'No se han encontrado citas para la fecha indicada'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
    }
};

//Crear una nueva cita asociada a una mascota y a un veterinario
exports.createAppointment = async (req, res) => {
    const { reason, date, time, petId, veterinarianId } = req.body;
    try {
        const newAppointment = await Appointment.create({ reason, date, time, petId, veterinarianId });
        res.status(201).json(Response.success(newAppointment, 'Cita creada correctamente'));
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al crear la cita'));
    }
};

//Eliminar una cita por su ID
exports.deleteAppointment = async (req, res) => {
    const { id } = req.params;
    try {
        const appointment = await Appointment.findByPk(id);
        if (appointment) {
            await appointment.destroy();
            res.json(Response.success(appointment, 'Cita eliminada correctamente'));
        } else {
            res.status(404).json(Response.error(null, 'Cita no encontrada'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al eliminar la cita'));
    }
}
