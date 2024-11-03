const {z} = require('zod');

user = z.object({
    name: z
        .string({ message:"Campo obrigatório" })
        .min(3, "Mínimo 3 caracteres"),

    email: z
        .string({ message:"Campo obrigatório" })
        .email("E-mail inválido"),

    cpf: z
        .string({ message:"Campo obrigatório" })
        .regex(/\d+/gm, "Somente números")
        .regex(/\d{11}/gm, "Precisa ter 11 dígitos"),

    birthdate: z
        .string({ message:"Campo obrigatório" })
        .date("Precisa estar no formato yyyy-mm-dd")
});

module.exports = user;