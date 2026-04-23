const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Endpoint de santé (obligatoire pour le projet)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend opérationnel' });
});

// Endpoint principal
app.get('/api/messages', (req, res) => {
  res.json({ 
    messages: ['Bonjour depuis le backend !', 'DevOps c\'est cool !'] 
  });
});

app.listen(PORT, () => {
  console.log(`Backend lancé sur le port ${PORT}`);
});