const express = require('express');
const router = express.Router();
const veterinarianController = require('../controllers/veterinarianController.js');

//Rutas para los veterinarios
router.get('/', veterinarianController.getAllVeterinarians);
router.get('/:id', veterinarianController.getVeterinarianById);
router.get('/speciality/:speciality', veterinarianController.getAllVeterinariansBySpeciality);
router.post('/', veterinarianController.createVeterinarian);
router.put('/:id', veterinarianController.updateVeterinarian);
router.delete('/:id', veterinarianController.deleteVeterinarian);

module.exports = router;
