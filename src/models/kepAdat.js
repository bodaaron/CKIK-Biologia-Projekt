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
            },
            adatSorszam:
            {
                type: DataTypes.INTEGER,
            },
            helyesValasz:
            {
                type: DataTypes.STRING(60),
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