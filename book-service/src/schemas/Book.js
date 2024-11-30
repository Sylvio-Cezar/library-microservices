const {z} = require('zod');

book = z.object({
    name: z
        .string({ message:"Campo obrigatório" })
        .min(3, "Mínimo 3 caracteres"),

    author: z
        .string({ message:"Campo obrigatório" })
        .min(3, "Mínimo 3 caracteres"),

    available: z
        .boolean({ message: "Campo obrigatório" })
        .refine(value => typeof value === 'boolean', {
        message: "Campo de disponivel ou não (true ou false)",
        })
});

module.exports = book;