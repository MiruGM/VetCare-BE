const SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto(
    'vet_care', // bd
    'vetcareadmin', // usuario bd
    'vetcareadmin', // contraseña bd
    {
        host: 'localhost',
        dialect: 'mysql',
        directory: './models',
        port: '3306',
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