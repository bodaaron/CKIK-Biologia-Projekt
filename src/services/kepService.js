const kepRepository  = require("../repositories/kepRepository");


class KepService
{
    async getKepek()
    {
        return await kepRepository.getKepek();
    }
}

module.exports = new KepService();