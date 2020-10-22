const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com MongoDB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

const port = 3333;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});