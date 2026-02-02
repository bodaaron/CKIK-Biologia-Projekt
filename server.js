const app = require('./src/app')
const cors = require('cors')
const bodyParser = require('body-parser')
const sendMail = require('./src/emailsender')

require('./src/database/dbContext')
require('dotenv').config();

app.use(bodyParser.json())

app.post('/send-email', async (req, res) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'E-mail cím megadása kötelező!' })
  }

  try {
    const response = await sendMail(email)
    res.json({ success: true, message: 'E-mail elküldve!', response })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(3000, () => {
  console.log('Szerver fut http://localhost:3000')
})
