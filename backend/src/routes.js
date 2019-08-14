const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductController');
routes.get('/products', ProductsController.find);
routes.get('/products/:id', ProductsController.findById);
routes.post('/products', ProductsController.create);
routes.put('/products/:id', ProductsController.update);
routes.delete('/products/:id', ProductsController.remove);

module.exports = routes;
