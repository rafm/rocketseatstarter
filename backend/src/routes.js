const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductController');
routes.get('/products', ProductsController.find);
routes.post('/products', ProductsController.create);

module.exports = routes;
