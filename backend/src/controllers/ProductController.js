const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async find(request, response) {
        const products = await Product.find();

        return response.json(products);
        // return response.json(await Product.find());
    },
    // find: (request, response) => {
    //     return Product.find().then((products) => response.json(products));
    // },
    async create(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    }
}
