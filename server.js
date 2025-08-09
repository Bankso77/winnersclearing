const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { email, password, provider } = req.body;
  // Here you would add authentication logic
  if (!email || !password || !provider) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  // For demo, just echo back
  res.json({ message: `Login received for ${provider}`, email });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
