//Puerto de acceso al servidor
const PORT = process.env.PORT || 3000;

//Variables de la base de datos
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_USER = process.env.DB_USER || 'vetcareadmin';
const DB_PASSWORD = process.env.DB_PASSWORD || 'vetcareadmin';
const DB_NAME = process.env.DB_NAME || 'vet_care';
const DB_PORT = process.env.DB_PORT || '3306';


module.exports = {
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_PORT
};
