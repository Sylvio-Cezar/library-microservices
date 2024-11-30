const express = require('express');
const router = express.Router();
const { Book } = require("../models/index");
const bookSchema = require("../schemas/book");


router.post("/books", async (req, res) => {
    //extração dos dados
    const { name, author, available } = req.body;

    try {
        // Validação
        const validatedData = bookSchema.parse({ name, author, available });

        // Se a validação passar, cria o novo livro no banco de dados
        const newBook = await Book.create(validatedData);

        //Status 201 é criação bem-sucedida
        res.status(201).send(newBook);

    } catch (err) {
        console.error(err);
        res.status(400).send({
            message: "Erro ao cadastrar o livro",
            error: err.errors || err.message
        });
    }

    /*
        #swagger.tags = ['Books']
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/bookBody"
                    }
                }
            }
        }
    */
});

module.exports = router;
