const ProductController = require('../controllers/product.controller');


module.exports = app => {
    //Create
    app.post('/api/product/create', ProductController.createProduct);
    //read all
    app.get('/api/products', ProductController.findAllProducts);
    //read one
    app.get('/api/product/:_id', ProductController.findOneProduct);
    // update
    app.put('/api/product/update/:_id', ProductController.updateProduct);
    //delete
app.delete('/api/product/delete/:_id', ProductController.deleteProduct);

}