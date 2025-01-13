const db = require("../database/dbContext")

class AdatRepository
{
    constructor(db)
    {
        this.kepadat = db.kepAdat;
    }

    async getAdatok(id)
    {   
        return await this.kepadat.findAll
        (
            {
                where:
                {
                    kepId: id
                }
            }
        );
    }
}
module.exports = new AdatRepository(db);