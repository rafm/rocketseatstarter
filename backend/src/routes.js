const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductController');
routes.get('/products', ProductsController.index);

module.exports = routes;
