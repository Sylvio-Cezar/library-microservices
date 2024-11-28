const express = require('express');
const { Loan } = require('../models/index');
const loanSchema = require('../schemas/loan');
const router = express.Router();
const auth = require('../services/auth.service');

router.post('/loans', async (req, res) => {
    try {
        const validatedLoan = loanSchema.parse(req.body);
        const canLoan = await auth.checkLoanAvailability(validatedLoan.book_id, validatedLoan.user_id);
        if (canLoan) {
            const newLoan = await Loan.create(validatedLoan);
            return res.status(201).send(newLoan); 
        } else {
            res.status(401).send("Livro e/ou usuário indisponível.")
        }
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
