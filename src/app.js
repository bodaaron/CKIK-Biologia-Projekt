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

app.use("/users", userRoutes);

module.exports = app;