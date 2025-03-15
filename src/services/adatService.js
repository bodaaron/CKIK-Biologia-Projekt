const adatRepository  = require("../repositories/adatRepository");


class AdatService
{
    async getAdatok(id)
    {
        return await adatRepository.getAdatok(id);
    }
}

module.exports = new AdatService();