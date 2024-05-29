const express = require('express');
const router = express.Router();
const treatmentController = require('../controllers/treatmentController.js');

//Rutas para los tratamientos
router.get('/', treatmentController.getAllTreatments);
router.get('/:id', treatmentController.getTreatmentById);
router.post('/', treatmentController.createTreatment);
router.put('/:id', treatmentController.updateTreatment);
router.delete('/:id', treatmentController.deleteTreatment);

module.exports = router;