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
  subject: 'Mukodik',
  text: 'szevasz te csovesbanat'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});