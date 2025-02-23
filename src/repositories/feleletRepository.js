const { DATE } = require("sequelize");
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

    async updateFeleletDate(date,id)
    {
        const felelet = await this.felelet.findOne
        (
            {
                where:
                {
                    id: id,
                }
            }
        )

        felelet.set({
            kitoltesDatum: Date.now()
        });

        await felelet.save();
    }
}
module.exports = new FeleletRepository(db);