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

    if(nev == "" || email == "" || jelszo == "" || osztaly == ""){
        res.status(400).send("Nem lehet üres mező!");
    }
    else{
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

}

exports.getUser = async (req,res ,next) =>{

    const email = req.body;
    res.status(200).send(await userService.getUser(email));
}

exports.loginUser = async (req, res, next) =>
{
    const { email, jelszo } = req.body;

    const user = await userService.getUser(email);

    if(user)
    { 
        const jo = await bcrypt.compare(jelszo, user.jelszo)
        if(jo)
        {
            res.status(200).send("Login successfull");
        }
        else
        {
            res.status(400).send("Wrong password");
        }
    }
    else
    {
        res.status(400).send("Hibás E-mail cím!")
    }
        
}