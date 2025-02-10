const nodemailer = require('nodemailer')
const crypto = require('crypto')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

function generateToken() {
  return crypto.randomBytes(32).toString('hex')
}

function sendMail(toEmail) {
  return new Promise((resolve, reject) => {
    const token = generateToken()
    const resetPasswordLink = `http://localhost:5173/jelszo-visszaallitas/${token}`

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: 'Jelszó változtatási kérelem',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h1 style="color: #4CAF50;">Jelszó változtatási kérelem</h1>
          <p style="font-size: 16px;">Kedves Felhasználó,</p>
          <p style="font-size: 16px;">A linkre kattintva megváltoztathatja a jelszavát!</p>
          <div style="text-align: center; margin-top: 20px;">
            <a href="${resetPasswordLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Jelszó változtatás</a>
          </div>
          <p style="font-size: 16px;">Amennyiben nem ön kérte a jelszó változtatás, hagyja figyelmen kívül ezt az üzenetet.</p>
          <p style="font-size: 16px;">Üdvözlettel,<br>A Biology Webpage Csapata</p>
        </div>
      `,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error)
      } else {
        resolve(info.response)
      }
    })
  })
}

module.exports = sendMail
