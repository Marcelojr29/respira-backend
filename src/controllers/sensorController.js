// Controle dos dados dos sensores
const SensorData = require('../models/SensorData');

exports.addSensorData = async (req, res) => {
    try {
        const { sensorId, co2, temperature } = req.body;
        const data = await SensorData.create({ sensorId, co2, temperature });
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar dados ao sensor.' });
    }
};

exports.getSensorData = async (req, res) => {
    try{
        const data = await SensorData.findAll();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados dos sensores.' });
    }
};