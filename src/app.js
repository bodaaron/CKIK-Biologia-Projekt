const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const userRoutes = require("./routes/userRoutes");

app.use("/users", userRoutes);

module.exports = app;