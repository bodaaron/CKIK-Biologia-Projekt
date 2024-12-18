const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class kep extends Model {};

    kep.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            nev:
            {
                type: DataTypes.STRING(60),
            },
            fajlnev:
            {
                type: DataTypes.STRING(60),
            },
        },

        {
            sequelize,
            modelName: "kep",
            timestamps: false,
            freezeTableName: true,
        }
    )

    return kep;
}