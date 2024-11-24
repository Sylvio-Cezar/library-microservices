const {z} = require('zod');

loan = z.object({
    user_id: z
        .string({ message:"Campo obrigatório" }),

    book_id: z
        .string({ message:"Campo obrigatório" }),

    loan_date: z
        .string({ message:"Campo obrigatório" })
        .coerce.date({ message:"Precisa estar no formato de data" }),

    return_date: z
        .union([z.
            string({ message:"Campo obrigatório" })
            .coerce.date({ message:"Precisa estar no formato de data" }), 
            z.string().length(0)
        ])
        .optional()
        .transform(e => e === "" ? undefined : e)
});

module.exports = user;