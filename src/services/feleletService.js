const FeleletRepository = require('../repositories/feleletRepository')

class FeleletService {
  async createFelelet(felelet) {
    return await FeleletRepository.createFelelet(felelet)
  }
}

module.exports = new FeleletService()
