const db = require("../database/dbContext")

class FeleletRepository
{
    constructor(db)
    {
        this.felelet = db.felelet;
    }

    async createFelelet(felelet)
    {
        const newFelelet = await this.felelet.build(felelet);

        await newFelelet.save();
        
        return newFelelet;
    }
}
module.exports = new FeleletRepository(db);