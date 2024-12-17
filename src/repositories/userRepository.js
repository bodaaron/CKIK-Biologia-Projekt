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
                    email: email,
                }
            }
        )
    }
}

module.exports = new UserRepository(db);