// Modelo de dados dos sensores
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SensorData = sequelize.define('SensorData', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sensorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    co2: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    temperature: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    timestamp: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
});

module.exports = SensorData;