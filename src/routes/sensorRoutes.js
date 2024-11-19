// Rotas para sensores
const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/data', authenticateToken, sensorController.addSensorData);
router.get('/data', authenticateToken, sensorController.getSensorData);

module.exports = router;