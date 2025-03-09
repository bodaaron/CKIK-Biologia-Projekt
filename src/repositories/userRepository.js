const e = require('express')
const db = require('../database/dbContext')

class UserRepository {
  constructor(db) {
    this.felhasznalo = db.felhasznalo
  }

  async createUser(user) {
    const newUser = await this.felhasznalo.build(user)

    await newUser.save()

    return newUser
  }

  async getUsers() {
    return await this.felhasznalo.findAll()
  }

  async getUser(email) {
    return await this.felhasznalo.findOne({
      where: {
        email: email,
      },
    })
  }

  async modUser(id, nev, email, osztaly) {
    const user = await this.felhasznalo.findOne({
      where: {
        id: id,
      },
    })

    user.set({
      nev: nev,
      email: email,
      osztaly: osztaly,
    })

    await user.save()
  }

  async deleteUser(id) {
    const user = await this.felhasznalo.findOne({
      where: {
        id: id,
      },
    })

    user.destroy()
  }

  async giveJogToUser(id) {
    const user = await this.felhasznalo.findOne({
      where: {
        id: id,
      },
    })

    user.set({
      jogosultsag: 1,
    })

    await user.save()
  }

  async takeJogFromUser(id) {
    const user = await this.felhasznalo.findOne({
      where: {
        id: id,
      },
    })

    user.set({
      jogosultsag: 0,
    })

    await user.save()
  }

  async jelszoValtoztatUser(email, newPW) {
    const user = await this.felhasznalo.findOne({
      where: {
        email: email,
      },
    })

    user.set({
      jelszo: newPW,
    })

    await user.save()
  }
}

module.exports = new UserRepository(db)
