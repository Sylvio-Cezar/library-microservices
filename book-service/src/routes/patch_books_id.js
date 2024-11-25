const express = require('express');
const { Book } = require('../models/index');
const router = express.Router();

router.patch('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    const { available } = req.body;

    if (typeof available !== 'boolean') {
        return res.status(400).json({ error: 'O campo "available" deve ser um valor booleano' });
    }

    try {
        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }

        book.available = available;

        await book.save();

        res.status(200).json({ message: 'Disponibilidade do livro atualizada com sucesso', book });
    } catch (error) {
        console.error('Erro ao atualizar a disponibilidade do livro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

    //#swagger.tags = ['Books']
});

module.exports = router;
