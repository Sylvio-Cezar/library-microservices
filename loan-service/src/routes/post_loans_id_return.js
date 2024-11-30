const express = require('express');
const { Loan } = require('../models/index');
const router = express.Router();
const bookService = require('../services/book.service');

router.post('/loans/:id/return', async (req, res) => {
    const loanId = req.params.id;
    try {
        const loan = await Loan.findByPk(loanId); 

        if (!loan) {
            return res.status(404).json({ error: 'Empréstimo não encontrado' });
        }

        loan.return_date = Date.now();
        await loan.save();

        res.json({
            success: true,
            message: `Devolução registrada às ${loan.return_date}`,
            loan: loan.toJSON()
        });
        bookService.changeBookAvailability(loan.dataValues.book_id, true);
    } catch (error) {
        console.error('Erro ao buscar empréstimo:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }

    //#swagger.tags = ['Loans']
});

module.exports = router;
