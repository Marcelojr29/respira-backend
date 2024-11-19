// Rotas para sensores
const express = require('express');
const { getAllSensors, createSensor, updateSensor, deleteSensor } = require('../controllers/sensorController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', verifyToken, getAllSensors);
router.post('/', verifyToken, createSensor);
router.put('/:id', verifyToken, updateSensor);
router.delete('/:id', verifyToken, deleteSensor);

module.exports = router;