const { Router } = require('express');
const router = Router();
const { createInvoice, getInvoiceById, getAllInvoice } = require('../controllers/invoice.controller')

router.post('/', createInvoice);
router.get('/', getAllInvoice);
router.get('/:id', getInvoiceById);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);


module.exports = router;