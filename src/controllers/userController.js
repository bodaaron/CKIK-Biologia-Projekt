const userService = require("../services/userService");

const bcrypt = require("bcrypt");

const salt = 10;

exports.getUsers = async (req, res, next) =>
{
    res.status(200).send(await userService.getUsers());
}

exports.createUser = async (req, res, next) =>
{
    const { nev, email, jelszo, osztaly } = req.body;

    const newUser =
    {
        nev: nev,
        email: email,
        osztaly: osztaly,
        jogosultsag: 0,
        jelszo: await bcrypt.hash(jelszo, salt),
    }

    const result = await userService.createUser(newUser);

    if(result)
    {
        res.status(201).json(result);
    }
    else
    {
        res.status(400).send("Fail");
    }
}

exports.loginUser = async (req, res, next) =>
{
    const { email, jelszo } = req.body;

    const user = await userService.getUser(email);

    if(bcrypt.compare(jelszo, user.jelszo))
    {
        res.status(200).send("Login successfull");
    }
    else
    {
        res.status(400).send("Wrong password");
    }
}