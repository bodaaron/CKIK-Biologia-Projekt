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

    async kijavitValasz(id,elfogadotte)
    {
        const felelet = await this.valaszok.findOne
        (
            {
                where:
                {
                    id: id,
                }
            }
        )

        felelet.set({
            elfogadotte: elfogadotte === true ? true : false
        });

        await felelet.save();
    }
}
module.exports = new ValaszRepository(db);