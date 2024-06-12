const SequelizeAuto = require('sequelize-auto');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = require('../utils/constants');

const auto = new SequelizeAuto(
    DB_NAME, // bd
    DB_USER, // usuario bd
    DB_PASSWORD, // contraseña bd
    {
        host: DB_HOST,
        dialect: 'mysql',
        directory: './models',
        port: DB_PORT,
        caseMode: 'c',
        caseFile: 'c',
        singularize: true,
        additional: {
            timestamps: false
        }
    }
)

auto.run().then(data => {
    console.log(data.tables);
    console.log(data.text);
});

auto.run(); 