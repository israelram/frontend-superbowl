// Servicio de correo electrónico
const nodemailer = require('nodemailer');
const config = require('../config/email.js');

module.exports = {
  sendEmail: (to, subject, html) => {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.user,
        pass: config.pass
      }
    });

    let mailOptions = {
      from: '"My App" <myapp@example.com>',
      to,
      subject,
      html
    };

    return transporter.sendMail(mailOptions);
  }
};
