const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) =>
{
    class felelet extends Model {};

    felelet.init
    (
        {
            id:
            {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
            },
            diakId:
            {
                type: DataTypes.INTEGER,
            },
            kepId:
            {
                type: DataTypes.INTEGER,
            },
            tanarId:
            {
                type: DataTypes.INTEGER,
            },
            kitoltesDatum:
            {
                type: DataTypes.DATE,
            },
            helyesValaszok:
            {
                type: DataTypes.INTEGER,
            },
        },

        {
            sequelize,
            modelName: "felelet",
            timestamps: false,
            freezeTableName: true,
        }
    )

    return felelet;
}