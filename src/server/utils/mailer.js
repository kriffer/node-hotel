const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'example',
  auth: {
    user: 'youremail@example.com',
    pass: 'yourpassword'
  }
});

const mailOptions = {
  from: 'youremail@example.com',
  to: 'recipient@example.com',
  subject: 'Node Hotel Notification',
  text: 'MessageText!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
