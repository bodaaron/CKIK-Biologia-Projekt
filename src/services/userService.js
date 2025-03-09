const userRepository = require('../repositories/userRepository')

class UserService {
  async createUser(user) {
    return await userRepository.createUser(user)
  }

  async getUsers() {
    return await userRepository.getUsers()
  }

  async getUser(email) {
    return await userRepository.getUser(email)
  }

  async modUser(id, nev, email, osztaly) {
    return await userRepository.modUser(id, nev, email, osztaly)
  }

  async deleteUser(id) {
    return await userRepository.deleteUser(id)
  }

  async giveJogToUser(id) {
    return await userRepository.giveJogToUser(id)
  }

  async takeJogFromUser(id) {
    return await userRepository.takeJogFromUser(id)
  }

  async jelszoValtoztatUser(email, newPW) {
    return await userRepository.jelszoValtoztatUser(email, newPW)
  }
}

module.exports = new UserService()
