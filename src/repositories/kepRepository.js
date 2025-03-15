const db = require("../database/dbContext")

class KepRepository
{
    constructor(db)
    {
        this.kep = db.kep;
    }

    async getKepek()
    {
        return await this.kep.findAll();
    }
}

module.exports = new KepRepository(db);