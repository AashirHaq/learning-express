const Product = require('../../models/Product');

exports.index = (req, res, next) => {
    Product.list(products => {
        res.render('shop', {
            prods: products,
            docTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCss: true
        })
    })
}