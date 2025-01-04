const userRepository  = require("../repositories/userRepository");

class UserService
{
    async createUser(user)
    {
        return await userRepository.createUser(user);
    }

    async getUsers()
    {
        return await userRepository.getUsers();
    }

    async getUser(email)
    {
        return await userRepository.getUser(email);
    }

    async modUser(nev,email,osztaly)
    {
        return await userRepository.modUser(nev,email,osztaly)
    }
}

module.exports = new UserService();