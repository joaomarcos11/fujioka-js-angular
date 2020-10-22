const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const VynilDiscController = require('./controllers/VynilDiscController');
const CommentController = require('./controllers/CommentController');

// Rotas produto
routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

// Rotas Discos
routes.get('/discs', VynilDiscController.index);
routes.get('/discs/:id', VynilDiscController.show);
routes.post('/discs', VynilDiscController.store);
routes.put('/discs/:id', VynilDiscController.update);
routes.delete('/discs/:id', VynilDiscController.destroy);

// Rotas Comentarios
routes.get('/comment', CommentController.index);
routes.get('/comment/:id', CommentController.show);
routes.post('/comment', CommentController.store);
routes.put('/comment/:id', CommentController.update);
routes.delete('/comment/:id', CommentController.destroy);

module.exports = routes;