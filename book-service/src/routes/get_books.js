const express = require('express');
const router = express.Router();
const { Book } = require("../models/index");

router.get("/books", async (req, res) => {
    try {
        // Recupera todos os livros
        const books = await Book.findAll();
        console.log(books);

        // Verificação de livros no banco
        if (books.length > 0) {
            // Transforma os livros em objetos JSON e envia a resposta
            const bookList = books.map(book => book.toJSON());
            res.send(bookList);
        } else {
            // caso não tenha livros, começamos do zero.
            res.send([]);
        }

        // #swagger.tags = ['Books']
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Erro ao buscar livros",
            error: err.message || err
        });
    }
});

module.exports = router;