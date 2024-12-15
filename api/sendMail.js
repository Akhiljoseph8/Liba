const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'akhiljosephaj85@gmail.com', // Secure credentials via environment variables
      pass: 'rzmf jpzd uegf jbhm',
    },
  });

  const mailOptions = {
    from: email,
    to: 'akhiljosephaj85@gmail.com',
    subject: `New Contact Message from ${name}`,
    text: `email: ${email} \n message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
