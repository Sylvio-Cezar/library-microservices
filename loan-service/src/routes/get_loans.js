const express = require('express');
const router = express.Router();

const { Loan } = require("../models/index")

router.get("/loans", async (req, res) => {
    const loans = await Loan.findAll();
    console.log(loans);

    if (loans.length > 0) {
        const loanList = loans.map(loan => loan.toJSON());
        res.send(loanList)
    } else {
        res.send([])
    }

    // #swagger.tags = ['Loans']
});

module.exports=router;