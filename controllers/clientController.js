//Función de logging
const { logMessage } = require('../utils/logger.js');

//Método de creación de objetos de respuesta
const Response = require('../utils/response.js');

// Método para recuperar los modelos
const initializeModels = require('../config/db.js');

//Recuperar el modelo cliente
const models = initializeModels();
const Client = models.client;
const Pet = models.pet;


//CONTROLADORES DE CLIENTE
//Obtener todos los clientes
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll({
            include: Pet
        });
        res.json(Response.success(clients, 'Datos de clientes recuperados'));
    } catch (error) {
        logMessage(error.message);
        res.status(500).json(
            Response.error(null, 'Error al recuperar los datos: ', req.originalUrl)
        );
    }
};

//Obtener un cliente por su id
exports.getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk(id, {
            include: Pet
        });
        if (client) {
            res.json(Response.success(client, 'Datos del cliente recuperados'));
        } else {
            res.status(404).json(Response.error(null, 'Cliente no encontrado'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al recuperar los datos'));
    }
};

//Obtener un cliente por su email
exports.getClientByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const client = await Client.findOne({
            where: { email: email }
        }, {
            include: Pet
        });
        if (client) {
            res.json(Response.success(client, 'Datos del cliente recuperados'));
        } else {
            res.status(404).json(Response.error(null, 'Cliente no encontrado'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al recuperar los datos'))
    }
};

//Obtener un cliente por su dni
exports.getClientByDni = async (req, res) => {
    const { dni } = req.params;
    try {
        const client = await Client.findOne({
            where: { dni: dni }
        }, {
            include: Pet
        });
        if (client) {
            res.json(Response.success(client, 'Datos del cliente recuperados'));
        } else {
            res.status(404).json(Response.error(null, 'Cliente no encontrado'));
        }
    } catch (error) {
        res.status(404).json(Response.error(null, 'Error al recuperar los datos'));
    }
};

//Crear un cliente nuevo
exports.createClient = async (req, res) => {
    const { dni, name, email, phone, password } = req.body;
    try {
        const newClient = await Client.create({ dni, name, email, phone, password });
        res.status(201).json(Response.success(newClient, 'Cliente creado correctamente'));
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al crear el cliente'));
    }
};

//Actualizar un cliente por su id
exports.updateClient = async (req, res) => {
    const { id } = req.params;
    const { dni, name, email, phone, password } = req.body;
    try {
        const client = await Client.findByPk(id);
        if (client) {
            client.dni = dni;
            client.name = name;
            client.email = email;
            client.phone = phone;
            client.password = password;
            await client.save();
            res.json(Response.success(client, 'Cliente actualizado correctamente'));
        } else {
            res.status(404).json(Response.error(null, 'Cliente no encontrado'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al actualizar el cliente'));
    }
};

//Eliminar un cliente por su id
exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk(id);
        if (client) {
            await client.destroy();
            res.json(Response.success(client, 'Cliente eliminado correctamente'));
        } else {
            res.status(404).json(Response.error(null, 'Cliente no encontrado'));
        }
    } catch (error) {
        res.status(500).json(Response.error(null, 'Error al eliminar el cliente'));
    }
}; 