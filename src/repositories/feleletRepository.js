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

    async getDiakFeleletek(id)
    {   
        return await this.felelet.findAll
        (
            {
                where:
                {
                    diakId: id
                }
            }
        );
    }
}
module.exports = new FeleletRepository(db);