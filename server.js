const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
  Product.create({title: 'Guitarra', description: 'Fender Stratocaster'});

  res.send('Hello World');
});

app.listen(3333);