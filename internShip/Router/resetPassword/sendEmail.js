var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const mongoose = require('mongoose');
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "06aca4317909741814e3ef2882960742",
    pass: "eyJhbGciOiJIUzUxMiJ9.eyJkYXRhIjp7InRva2VuIjoiMDZhY2E0MzE3OTA5NzQxODE0ZTNlZjI4ODI5NjA3NDIifX0.NodIxXMDc99YGazaZm6hUEq4QX-JghNWopZYBh1OvYd8jth_2DoQKyVWx-otxI-ciaeFWGjS7IqKi68TrWSL-g"
  }
});

var mailOptions = {
  from: 'chillkid934@gmail.com',
  to: 'hmaouimarwa535@gmail.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, it’s our first message sent with Nodemailer ',
  html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br /><img src="cid:uniq-mailtrap.png" alt="mailtrap" />',
  
};

var functions = {
  
  
  sendMail: transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
  })
  
  
  
}

module.exports = functions
