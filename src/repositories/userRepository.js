const e = require("express");
const db = require("../database/dbContext")

class UserRepository
{
    constructor(db)
    {
        this.felhasznalo = db.felhasznalo;
    }

    async createUser(user)
    {
        const newUser = await this.felhasznalo.build(user);

        await newUser.save();
        
        return newUser;
    }

    async getUsers()
    {
        return await this.felhasznalo.findAll();
    }

    async getUser(email)
    {
        return await this.felhasznalo.findOne
        (
            {
                where:
                {
                    email: email
                }
            }
        )
    }

    async modUser(LogEmail,nev,email,osztaly)
    {
        console.log(LogEmail);
        const user = await this.felhasznalo.findOne
        (
            {
                where:
                {
                    email: LogEmail,
                }
            }
        )

        user.set({
            nev: nev,
            email: email,
            osztaly: osztaly,
        });

        await user.save();
    }
}

module.exports = new UserRepository(db);