var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'biologywebpageckik@gmail.com',
    pass: 'wdev mmcm svbk tsrx'
  }
});

var mailOptions = {
  from: 'biologywebpageckik@gmail.com',
  to: 'wellerdani2005@gmail.com',
  subject: 'Jelszó változtatási kérelem',
  html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h1 style="color: #4CAF50;">Jelszó változtatási kérelem</h1>
      <p style="font-size: 16px;">Kedves Felhasználó,</p>
      <p style="font-size: 16px;">A linkre kattintva megváltoztathatja a jelszavát!</p>
      <div style="text-align: center; margin-top: 20px;">
        <a href="https://www.idekénealink.net" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Jelszó változtatás</a>
      </div>
      <p style="font-size: 16px;">Amennyiben nem ön kérte a jelszó változtatás, hadja figyelmen kívül ezt az üzenetet.</p>
      <p style="font-size: 16px;">Ha bármilyen kérdése van, kérjük, ne habozzon kapcsolatba lépni velünk.</p>
      <p style="font-size: 16px;">További szép napot kívánunk!</p>
      <p style="font-size: 16px; font-weight: bold;">Üdvözlettel,<br>A Biology Webpage Csapata</p>
    </div>
  `
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
