const express = require('express');
const { User } = require('../models/index');
const router = express.Router();


router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(user.toJSON());
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

    //#swagger.tags = ['Users']
});

module.exports = router;
