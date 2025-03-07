const ValaszRepository = require('../repositories/valaszRepository')

class ValaszService {

    async createValasz(valasz) {
        return await ValaszRepository.createValasz(valasz)
    } 

    async getValaszok(id){
        return await ValaszRepository.getValaszok(id);
    }

    async kijavitValasz(id,elfogadotte){
        return await ValaszRepository.kijavitValasz(id,elfogadotte);
    }
}

module.exports = new ValaszService()