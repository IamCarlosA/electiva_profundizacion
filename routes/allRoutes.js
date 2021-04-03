const { Router } = require('express');
const router = Router();


router.use('/products', require('./product.router'));


module.exports = router;