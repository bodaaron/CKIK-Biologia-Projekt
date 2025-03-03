const userService = require('../services/userService')

const bcrypt = require('bcrypt')

const salt = 10

exports.getUsers = async (req, res, next) => {
  res.status(200).send(await userService.getUsers())
}

exports.createUser = async (req, res, next) => {
  const { nev, email, jelszo, osztaly } = req.body

  const userek = await userService.getUsers()

  if (userek.some((user) => user.email === email)) {
    return res.status(400).json({ error: 'Ez az email cím már használatban van!' })
  } else {
    const newUser = {
      nev: nev,
      email: email,
      osztaly: osztaly,
      jogosultsag: 0,
      jelszo: await bcrypt.hash(jelszo, salt),
    }

    const result = await userService.createUser(newUser)

    if (result) {
      res.status(201).json(result)
    } else {
      res.status(400).send('Fail')
    }
  }
}

exports.getUserData = async (req, res, next) => {
  const { email } = req.params

  const user = await userService.getUser(email)

  res.status(200).send(user)
}

exports.loginUser = async (req, res, next) => {
  const { email, jelszo } = req.body

  const user = await userService.getUser(email)

  if (!user) {
    return res.status(400).json({ error: 'Hibás E-mail cím!' })
  }

  if (user) {
    const jo = await bcrypt.compare(jelszo, user.jelszo)
    if (jo) {
      res.status(200).send(user)
    } else {
      return res.status(400).json({ error: 'Hibás jelszó!' })
    }
  }
}

exports.modUser = async (req, res, next) => {
  const { id, nev, email, osztaly } = req.body

  const userek = await userService.getUsers()

  if (userek.some((user) => user.email === email && user.id != id)) {
    return res.status(400).json({ error: 'Ez az email cím már használatban van!' })
  } else {
    res.status(200).send(await userService.modUser(id, nev, email, osztaly))
  }
}

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params
  res.status(200).send(await userService.deleteUser(id))
}

exports.giveJogToUser = async (req, res, next) => {
  const { id } = req.params
  res.status(200).send(await userService.giveJogToUser(id))
}

exports.jelszoValtoztatUser = async (req, res, next) => {
  const { email, jelszo } = req.body
  var newPW = ''
  newPW = await bcrypt.hash(jelszo, salt)
  res.status(200).send(await userService.jelszoValtoztatUser(email, newPW))
}
