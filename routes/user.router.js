const { Router } = require('express');
const router = Router();
const { createUser, deleteUser, getAllUsers, getUserById, updateUser} = require('../controllers/user.controller')
 
router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;