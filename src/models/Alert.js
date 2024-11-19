// Modelo de alertas
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Alert = sequelize.define('Alert', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  sensorId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'Sensors',
      key: 'id',
    },
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  severity: {
    type: DataTypes.ENUM('low', 'medium', 'high'),
    defaultValue: 'low',
  },
  resolved: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Alert;