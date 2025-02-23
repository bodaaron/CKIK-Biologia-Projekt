const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173',
}))

const userRoutes = require("./routes/userRoutes");

const kepRoutes = require("./routes/kepRoutes")

const adatRoutes = require("./routes/adatRoutes")

const feleletRoutes = require("./routes/feleletRoutes")

const valaszRoutes = require("./routes/valaszRoutes")

app.use("/users", userRoutes);

app.use("/kepek",kepRoutes);

app.use("/adatok",adatRoutes);

app.use("/feleletek",feleletRoutes);

app.use("/valaszok",valaszRoutes)

module.exports = app;