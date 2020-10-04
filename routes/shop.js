const express = require('express');
const router = express.Router();

//controllers
const shopController = require('../controllers/site/ShopController')

// GET
router.get('/', shopController.index);

module.exports = router;