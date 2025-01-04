const { Sequelize, DataTypes } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize
(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,

    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: console.log,
    }
)

try
{
    sequelize.authenticate();

    console.log("Database Connection Successful");
}
catch(error)
{
    console.log(error.message);
}

const db = {};

db.Sequelize = Sequelize;

db.sequelize = sequelize;

db.felelet = require("../models/felelet")(sequelize, DataTypes);
db.felhasznalo = require("../models/felhasznalo")(sequelize, DataTypes);
db.kep = require("../models/kep")(sequelize, DataTypes);
db.kepAdat = require("../models/kepAdat")(sequelize, DataTypes);
db.valaszok = require("../models/valaszok")(sequelize, DataTypes);


db.felhasznalo.hasOne(db.felelet, {
    foreignKey: {
      name: 'diakId',
    },
  });

db.felhasznalo.hasOne(db.felelet, {
    foreignKey: {
      name: 'tanarId',
    },
  });

db.felelet.hasOne(db.valaszok, {
    foreignKey: {
      name: 'feleletId',
    },
  });

db.kep.hasOne(db.felelet, {
    foreignKey: {
      name: 'kepId',
    },
  });

db.kep.hasOne(db.kepAdat, {
    foreignKey: {
      name: 'kepId',
    },
  });

db.sequelize.sync({ alter: true });

module.exports = db;