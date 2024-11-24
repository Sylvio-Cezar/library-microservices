const express = require('express');
const { Book } = require('../models/index');
const router = express.Router();

router.get('/books/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Book.findByPk(bookId);

        if (!book) {
            return res.status(404).json({ error: 'Livro não encontrado' });
        }

        res.json(book.toJSON());
    } catch (error) {
        console.error('Erro ao buscar livro:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

    //#swagger.tags = ['Books']
});

module.exports = router;
