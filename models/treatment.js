module.exports = function (sequelize, DataTypes) {
    return sequelize.define('treatment', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        reason: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        meds: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        frequency: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        followUp: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }

    }, {
        sequelize,
        tableName: 'treatment',
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
