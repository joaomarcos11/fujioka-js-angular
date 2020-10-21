const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3333);