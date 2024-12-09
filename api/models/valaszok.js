const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class valaszok extends Model {};

    valaszok.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            feleletId:
            {
                type: DataTypes.INTEGER,
            },
            valasz:
            {
                type: DataTypes.STRING(60),
            },
            elfogadotte:
            {
                type: DataTypes.BOOLEAN,
            },
        },

        {
            sequelize,
            modelName: "valaszok",
            timestamps: false,
        }
    )

    return valaszok;
}