const SensorData = require('../models/SensorData');

exports.getSensorData = async (req, res) => {
    const { sensorId } = req.params;
    try {
        const data = await SensorData.findAll({ where: { sensorId } });
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados do sensor' });
    }
};

exports.createSensorData = async (req, res) => {
    const { sensorId, temperatura, co2 } = req.body;
    try {
        const data = await SensorData.create({ sensorId, temperature, co2 });
        res.status(201).json({ message: 'Dados do sensor criados com sucesso', data});
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar dados do sensor'});
    }
};