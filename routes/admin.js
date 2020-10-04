const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../utils/path');

const products = [];

router.get('/products/create', (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'admin', 'products', 'create.pug'))
    res.render('admin/products/create', {
        docTitle: 'Add Product',
        path: '/admin/products/create',
        activeAddProduct: true,
        formsCss: true,
        productCss: true
    });
});

router.post('/products/create', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;