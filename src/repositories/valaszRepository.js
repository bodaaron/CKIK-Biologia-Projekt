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
}
module.exports = new ValaszRepository(db);