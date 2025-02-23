const ValaszRepository = require('../repositories/valaszRepository')

class ValaszService {

    async createValasz(valasz) {
        return await ValaszRepository.createValasz(valasz)
    } 
}

module.exports = new ValaszService()