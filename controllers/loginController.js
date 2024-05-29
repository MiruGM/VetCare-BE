//Función de logging 
const { logMessage } = require('../utils/logger.js');

//Método de creación de objetos de respuesta
const Response = require('../utils/response.js');

//Método para recuperar los modelos
const initializeModels = require('../config/db.js');

//Recuperar modelos para hacer login
const models = initializeModels();
const Client = models.client;
const Veterinarian = models.veterinarian;


exports.login = async (req, res) => {
    const { email, password } = req.body;

    //Comprobar si es un cliente o un veterinario
    //Los emails de los veterinarios serán corporativos y siempre acabaran en @vetcare.com
    const isVet = email.includes('@vetcare.com');

    //Si es un veterinario
    if (isVet) {
        try {

            const vet = await Veterinarian.findOne({ where: { email: email, password: password } });
            if (vet) {
                res.json(Response.success(vet, 'Veterinario logueado'));
            } else {
                res.status(404).json(Response.error(null, 'Veterinario no registrado'));
            }
        } catch (error) {
            res.status(500).json(Response.error(null, 'Error al recuperar los datos' + error));
        }
        //Si es un cliente
    } else {
        try {
            const client = await Client.findOne({ where: { email: email, password: password } });
            if (client) {
                res.json(Response.success(client, 'Cliente logueado'));
            } else {
                res.status(404).json(Response.error(null, 'Cliente no registrado'));
            }
        } catch (error) {
            res.status(500).json(Response.error(null, 'Error al recuperar los datos' + error));
        }
    }
};