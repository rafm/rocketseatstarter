const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(request, response) {
        const products = await Product.find();

        return response.json(products);
        // return response.json(await Product.find());
    },
    // index: (request, response) => {
    //     return Product.find().then((products) => response.json(products));
    // },
    async store(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    }
}
