const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController.js');

//Rutas para las citas
router.get('/', appointmentController.getAllAppointments);
router.get('/pet/:petId', appointmentController.getAllAppointmentsByPetId);
router.get('/date/:date', appointmentController.getAllAppointmentsByDate);
router.get('/date/after/:date', appointmentController.getAllAppointmentsByDateAfter);
router.get('/date/before/:date', appointmentController.getAllAppointmentsByDateBefore);
router.post('/', appointmentController.createAppointment);
router.delete('/:id', appointmentController.deleteAppointment);

module.exports = router;