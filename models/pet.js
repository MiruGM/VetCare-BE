module.exports = function (sequelize, DataTypes) {
    return sequelize.define('pet', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        registrationNumber: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        sex: {
            type: DataTypes.CHAR(1),
            allowNull: false
        },
        type: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        species: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        breed: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'pet',
        timestamps: false,
        underscored: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: 'BTREE',
                fields: [
                    { name: "id" },
                ]
            },
        ]
    });
}