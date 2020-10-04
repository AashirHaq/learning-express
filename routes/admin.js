const express = require('express');
const router = express.Router();

//controllers
const productController = require('../controllers/admin/ProductController');

// GET
router.get('/products/create', productController.create);
// POST
router.post('/products/create', productController.store);

module.exports = router;