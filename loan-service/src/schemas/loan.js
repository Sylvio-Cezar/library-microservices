const {z} = require('zod');

loan = z.object({
    user_id: z
        .number({ message:"Campo obrigatório" })
        .int({ message:"Precisa ser um número inteiro" }),

    book_id: z
        .number({ message:"Campo obrigatório" })
        .int({ message:"Precisa ser um número inteiro" }),

    loan_date: z
        .coerce.date({ message:"Precisa estar no formato de data" }),

    return_date: z
        .union([z.
            coerce.date({ message:"Precisa estar no formato de data" }), 
            z.string().length(0)
        ])
        .optional()
        .transform(e => e === "" ? undefined : e)
});

module.exports = loan;