const express = require('express');
const swaggerUIPath= require('swagger-ui-express');
const swaggerjsonFilePath = require('../docs/swagger.json');

const app = express();
const port = 3000;

const post_users_router = require('./routes/post_users')
const get_users_router = require('./routes/get_users');
const get_user_id_router = require('./routes/get_users_id')

app.use(express.json());
app.use("/docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));

app.use(post_users_router)
app.use(get_users_router);
app.use(get_user_id_router);

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");

    // #swagger.tags = ['Server']
});

app.get('/', (req, res) => {
    res.status(200);
    res.send(`
        <p>Serviço de Usuários disponível</p>
        <p>Para informações das rotas consulte:</p>
        <a href="http://localhost:${port}/docs">http://localhost:${port}/docs</a>
    `);

    // #swagger.tags = ['Server']
});

app.listen(port, ()=>{
    console.info(`Servidor inicializado: http://localhost:${port}`);
});