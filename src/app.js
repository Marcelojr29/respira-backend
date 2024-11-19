// Configuração do servidor
require('dotnev').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/sensors', sensorRoutes);
app.use('api/reports', reportRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});