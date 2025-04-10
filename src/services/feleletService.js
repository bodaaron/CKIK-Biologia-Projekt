const FeleletRepository = require('../repositories/feleletRepository')

class FeleletService {
  async createFelelet(felelet) {
    return await FeleletRepository.createFelelet(felelet)
  }
  
  async getDiakFeleletek(id){
    return await FeleletRepository.getDiakFeleletek(id);
  }
  
  async updateFeleletDate(date,id){
    return await FeleletRepository.updateFeleletDate(date,id);
  }
}

module.exports = new FeleletService()
