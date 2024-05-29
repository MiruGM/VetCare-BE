module.exports = function (sequelize, DataTypes) {
    return sequelize.define('client', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        dni: {
            type: DataTypes.STRING(9),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.STRING(9),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'client',
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