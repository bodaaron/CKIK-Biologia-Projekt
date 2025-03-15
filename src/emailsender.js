const nodemailer = require('nodemailer')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

function generateToken(email) {
  return jwt.sign({ email }, process.env.JWT_KEY, { expiresIn: '1h' })
}

async function sendMail(toEmail) {
  try {
    const token = generateToken(toEmail)
    const resetPasswordLink = `http://localhost:5173/jelszo-visszaallitas/${token}`

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: 'Jelszó változtatási kérelem',
      html: `
        <table width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f9f9f9; padding: 20px;">
          <tr>
            <td align="center">
              <table width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 500px; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
                <tr>
                  <td align="center">
                    <h1 style="color: #4CAF50; font-family: Arial, sans-serif;">Jelszó változtatási kérelem</h1>
                  </td>
                </tr>
                <tr>
                  <td style="font-family: Arial, sans-serif; font-size: 16px; color: #333; padding: 10px;">
                    <p>Kedves Felhasználó,</p>
                    <p>Úgy tűnik, hogy problémái vannak a 
                      <strong style="color: #4CAF50;">Biology Webpage</strong>
                      fiókjához való hozzáféréssel. A lenti gombra kattintva megváltoztathatja a jelszavát!
                    </p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding: 20px;">
                    <a href="${resetPasswordLink}" style="background-color: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-size: 16px; font-family: Arial, sans-serif; display: inline-block;">
                      Jelszó változtatás
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="font-family: Arial, sans-serif; font-size: 16px; color: #333; padding: 10px;">
                    <p>Ha nem Ön kérte a jelszó változtatást, hagyja figyelmen kívül ezt az üzenetet.</p>
                    <p>Üdvözlettel,<br><strong style="color: #4CAF50;">Biology Webpage</strong> Csapata</p>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="font-family: Arial, sans-serif; font-size: 12px; color: #888; padding: 10px;">
                    <p>Ez egy automatikus email, kérem ne válaszoljon rá!</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    }

    const info = await transporter.sendMail(mailOptions)
    return info.response
  } catch (error) {
    throw new Error(`Email küldése sikertelen: ${error.message}`)
  }
}

module.exports = sendMail
