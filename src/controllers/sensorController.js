// Controle dos dados dos sensores
const sensor = require('../models/Sensor');

exports.getAllSensors = async (req, res) => {
    try {
        const sensors = await Sensor.findAll();
        res.status(200).json(sensors);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar sensores' });
    }
};

exports.createSensor = async (req, res) => {
    const { name, location } = req.body;
    try {
        const sensor = await Sensor.create({ name, location });
        res.status(201).json({ message: 'Sensor criado com sucesso', sensor });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar sensor '});
    }
};

exports.updateSensor = async (req, res) => {
    const { id } = req.params;
    const { name, location, status } = req.body;
    try {
        const sensor = await Sensor.findByPk(id);
        if (!sensor) return res.status(404).json({ error: 'Sensor não encontrado' });

        await sensor.update({ name, location, status });
        res.status(200).json({ message: 'Sensor atualizado com sucesso', sensor });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar sensor' });
    }
};

exports.deleteSensor = async (req, res) => {
    const { id } = req.params;
    try {
        const sensor = await Sensor.findByPk(id);
        if (!sensor) return res.status(404).json({ error: 'Sensor não encontrado' });

        await sensor.destroy();
        res.status(200).json({ message: 'Sensor excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir sensor' });
    }
};