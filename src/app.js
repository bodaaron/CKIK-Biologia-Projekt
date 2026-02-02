const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors(
{
   origin:
   [
     'http://localhost:3000',
     'http://localhost:426',
     'http://127.0.0.1:426',
     'http://172.22.0.87:426',
   ],
   credentials: true,
}));

app.use(express.json());

app.use(express.urlencoded({extended: true}))

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
