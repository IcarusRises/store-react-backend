const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const transport = {
 service: 'gmail',
 host: 'smt.gmail.com',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log('transport.verify');
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.route('/contact').post((req, res)=> {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message} `

  const mail = {
    from: name,
    to: process.env.TO,
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});

module.exports = router