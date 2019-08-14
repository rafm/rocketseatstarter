const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async find(request, response) {
        const { page = 1 } = request.query;
        const products = await Product.paginate({}, { page, limit : 10 });

        return response.json(products);
        // return response.json(await Product.find());
    },
    // find: (request, response) => {
    //     return Product.find().then((products) => response.json(products));
    // },
    async findById(request, response) {
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },
    async create(request, response) {
        const product = await Product.create(request.body);

        return response.json(product);
    },
    async update(request, response) {
        const product = await Product.findByIdAndUpdate(request.params.id, request.body, { new: true });

        return response.json(product);
    },
    async remove(request, response) {
        const product = await Product.findByIdAndRemove(request.params.id)

        return response.send();
    }
}
