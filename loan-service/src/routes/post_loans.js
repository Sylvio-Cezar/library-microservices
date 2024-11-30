const express = require('express');
const { Loan } = require('../models/index');
const loanSchema = require('../schemas/loan');
const router = express.Router();
const bookService = require('../services/book.service');
const userService = require('../services/user.service');

router.post('/loans', async (req, res) => {
    try {
        const validatedLoan = loanSchema.parse(req.body);

        const bookAvailable = await bookService.checkBookAvailability(validatedLoan.book_id);
        if (!bookAvailable) {
            return res.status(404).send("Livro indisponível.");
        }

        const userExists = await userService.checkUserExists(validatedLoan.user_id);
        if (!userExists) {
            return res.status(404).send("Usuário não cadastrado.");
        }

        const newLoan = await Loan.create(validatedLoan);
        bookService.changeBookAvailability(validatedLoan.book_id, false);
        return res.status(201).send(newLoan);

    } catch (error) {
        console.error('Erro ao cadastrar empréstimo:', error);
        return res.status(400).json({ error: error.message });
    }
    
    /*
        #swagger.tags = ['Loans']
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/loanBody"
                    }  
                }
            }
        }
    */
});

module.exports = router;
