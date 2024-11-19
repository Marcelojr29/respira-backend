const Log = require('../models/Log');

exports.logAction = (action) => async (req, res, next) => {
    try {
        await Log.create({
            action,
            userId: req.user?.id || null,
            details: JSON.stringify(req.body),
        });
        next();
    } catch (error) {
        console.error('Erro ao registrar log:', error);
        next();
    }
};