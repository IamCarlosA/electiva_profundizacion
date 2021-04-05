const { Router } = require('express');
const router = Router();


router.use('/products', require('./product.router'));
router.use('/users', require('./user.router'));
router.use('/invoices', require('./invoice.router'));

module.exports = router;