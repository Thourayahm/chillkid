var express = require ('express')
var router = express.Router()

var nodemailer = require('nodemailer');



router.route("/").post((req, res, next) => {
  const toEmail = req.body.email
  
  var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1eb3062042ce7f",
      pass: "f13825c4affdb8"
    }
  });
  
  var mailOptions = {
    from: '"Example Team" <from@example.com>',
    to: toEmail,
    subject: 'Nice Nodemailer test',
    text: 'Hey there, it’s our first message sent with Nodemailer ',
    html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
    
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  });
  res.send('mail sended')

  
});
module.exports = router;