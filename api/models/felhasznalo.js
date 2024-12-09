const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class felhasznalo extends Model {};

    felhasznalo.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            nev:
            {
                type: DataTypes.STRING(60),
            },
            email:
            {
                type: DataTypes.STRING(60),
            },
            jelszo:
            {
                type: DataTypes.STRING(60),
            },
            osztaly:
            {
                type: DataTypes.STRING(60),
            },
            jogosultsag:
            {
                type: DataTypes.INTEGER,
            },
        },

        {
            sequelize,
            modelName: "felhasznalo",
            timestamps: false,
        }
    )

    return felhasznalo;
}