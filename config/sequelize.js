const { Sequelize } = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('../utils/constants');

//Instanciar sequelize para conectar con MySQL 
const sequelize = new Sequelize(
    DB_NAME,
    DB_USER, // usuario bd
    DB_PASSWORD, // contraseña bd
    {
        host: DB_HOST,
        dialect: 'mysql',
        port: DB_PORT,
    });

//Probar la conexión
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión exitosa a la base de datos MySQL');
    } catch (error) {
        console.error('Error de conexión:', error);
    }
})();

module.exports = sequelize;