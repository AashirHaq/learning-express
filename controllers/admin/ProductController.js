const Product = require('../../models/Product');

exports.create = (req, res, next) => {
    res.render('admin/products/create', {
        docTitle: 'Add Product',
        path: '/admin/products/create',
        activeAddProduct: true,
        formsCss: true,
        productCss: true
    });
}

exports.store = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}