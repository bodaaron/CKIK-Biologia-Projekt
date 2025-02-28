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
    return await userRepository.deleteUser(id);
  }

  async giveJogToUser(id) {
    return await userRepository.giveJogToUser(id);
  }
}

module.exports = new UserService()
