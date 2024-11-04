const express = require('express');
const { User } = require('../models/index');
const userSchema = require('../schemas/user');
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const validatedUser = userSchema.parse(req.body); 
        const newUser = await User.create(validatedUser); 
        return res.status(201).send(newUser); 
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        return res.status(400).json({ error: error.message });
    }
    
    /*
        #swagger.tags = ['Users']
        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/userBody"
                    }  
                }
            }
        }
    */
});

module.exports = router;
