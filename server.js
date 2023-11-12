const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { email } = req.body;

  // Logic to send the email using nodemailer
  const transporter = nodemailer.createTransport({
    // Your email sending configuration (e.g., host, port, auth, etc.)
  });

  const mailOptions = {
    from: email,
    to: 'jibrandevm@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Email: ${email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send the email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
