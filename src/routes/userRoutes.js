const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');

router.post('/register', userController.register);
router.get('/login', userController.login);

router.get('/', authenticateToken, checkRole(['admin', 'gestor']), userController.getAllUsers);
router.put('/:id', authenticateToken, checkRole(['admin']), userController.updateUser);
router.delete('/:id', authenticateToken, checkRole(['admin']), userController.deleteUser);

module.exports = router;