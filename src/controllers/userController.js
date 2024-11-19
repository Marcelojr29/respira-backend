const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role, corporateEmail } = req.body;
        const user = await User.create({ name, email, password, role, corporateEmail });
        res.status(201).json({ message: 'Usuário registrado com sucesso.', user });
    } catch (error) {
        res.status(400).json({ message: 'Erro ao registrar usuário.', error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({ message: 'Senha incorreta.' });

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao fazer login.', error });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários.', error });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });

        await user.uptade(updates);
        res.json({ message: 'Usuário atualizado com sucesso.', user });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar usuário.', error });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado.' });

        await user.destroy();
        res.json({ message: 'Usuário excluído com sucesso.' });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir usuário.', error });
    }
};