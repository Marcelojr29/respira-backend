// Controle para envio de alertas
const Alert = require('../models/Alert');

exports.getAllAlerts = async (req, res) => {
    try {
        const alerts = await Alert.findAll();
        res.status(200).json(alert);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar alertas' });
    }
};

exports.createAlert = async (req, res) => {
    const { sensorId, message, severity } = req.body;
    try {
        const alert = await Alert.create({ sensorId, message, severity });
        res.status(201).json({ message: 'Alerta criado com sucesso', alert });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar alerta' });
    }
};