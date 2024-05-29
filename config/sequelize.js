const { Sequelize } = require('sequelize');

//Instanciar sequelize para conectar con MySQL 
const sequelize = new Sequelize(
    'vet_care',
    'vetcareadmin', // usuario bd
    'vetcareadmin', // contraseña bd
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3306',
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