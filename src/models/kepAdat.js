const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class kepAdat extends Model {};

    kepAdat.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            adatSorszam:
            {
                type: DataTypes.STRING(60),
            },
            helyesValasz:
            {
                type: DataTypes.STRING(60),
            },
            x:
            {
                type: DataTypes.INTEGER,
            },
            y:
            {
                type: DataTypes.INTEGER,
            },
            size:
            {
                type: DataTypes.INTEGER,
            },
            kepId:
            {
                type: DataTypes.INTEGER
            },
        },

        {
            sequelize,
            modelName: "kepAdat",
            timestamps: false,
            freezeTableName: true,
        }
    )

    return kepAdat;
}