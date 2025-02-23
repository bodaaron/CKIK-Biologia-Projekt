const db = require("../database/dbContext")

class ValaszRepository
{
    constructor(db)
    {
        this.valaszok = db.valaszok;
    }

    async createValasz(valasz)
    {
        const newValasz = await this.valaszok.build(valasz);

        await newValasz.save();
        
        return newValasz;
    }

    async getValaszok(id)
    {   
        return await this.valaszok.findAll
        (
            {
                where:
                {
                    feleletId: id
                }
            }
        );
    }
}
module.exports = new ValaszRepository(db);