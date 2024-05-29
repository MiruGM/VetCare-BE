const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController.js');

//Rutas para los clientes
router.get('/', clientController.getAllClients);
router.get('/:id', clientController.getClientById);
router.get('/email/:email', clientController.getClientByEmail);
router.get('/dni/:dni', clientController.getClientByDni);
router.post('/', clientController.createClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

module.exports = router;