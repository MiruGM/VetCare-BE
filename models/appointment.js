module.exports = function (sequelize, DataTypes) {
    return sequelize.define('appointment', {
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
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'appointment',
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