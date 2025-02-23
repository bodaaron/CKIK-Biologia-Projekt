const ValaszRepository = require('../repositories/valaszRepository')

class ValaszService {

    async createValasz(valasz) {
        return await ValaszRepository.createValasz(valasz)
    } 

    async getValaszok(id)
    {
        return await ValaszRepository.getValaszok(id);
    }
}

module.exports = new ValaszService()