var DataTypes = require('sequelize').DataTypes;
var _client = require('./client');
var _veterinarian = require('./veterinarian');
var _pet = require('./pet');
var _treatment = require('./treatment');
var _appointment = require('./appointment');

function initModels(sequelize) {
    var client = _client(sequelize, DataTypes);
    var veterinarian = _veterinarian(sequelize, DataTypes);
    var pet = _pet(sequelize, DataTypes);
    var treatment = _treatment(sequelize, DataTypes);
    var appointment = _appointment(sequelize, DataTypes);

    //Asociaciones entre los modelos 
    //Asociación 1:N entre Cliente y Mascota (1 cliente -> N mascotas)
    client.hasMany(pet, {
        foreignKey: 'clientId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
    }
    );
    pet.belongsTo(client);

    //Asociación 1:N entre Cita y Tratamiento (1 cita -> N tratamientos)
    appointment.hasMany(treatment, {
        foreignKey: 'appointmentId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
    });
    treatment.belongsTo(appointment);


    //Asociación 1:N entre Mascota y Cita (1 mascota -> N citas)
    pet.hasMany(appointment, {
        foreignKey: 'petId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
    });
    appointment.belongsTo(pet);

    //Asociación 1:N entre Veterinario y Cita (1 veterinario -> N citas)
    veterinarian.hasMany(appointment, {
        foreignKey: 'veterinarianId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: false
    });
    appointment.belongsTo(veterinarian);

    //Sincronización de los modelos con la base de datos
    sequelize.sync({ alter: true });
    return {
        client,
        veterinarian,
        pet,
        treatment,
        appointment,
    };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;