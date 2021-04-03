const { Router } = require('express');
const router = Router();
const { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct} = require('../controllers/product.controller')
 
router.get('/', getAllProducts);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);


module.exports = router;