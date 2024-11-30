const express = require('express');
const swaggerUIPath= require('swagger-ui-express');
const swaggerjsonFilePath = require('../docs/swagger.json');

const app = express();
const port = 3002;

const post_loans_router = require('./routes/post_loans');
const post_loans_id_return_router = require('./routes/post_loans_id_return');
const get_loans_router = require('./routes/get_loans');

app.use(express.json());

app.use("/docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));

app.use(post_loans_router);
app.use(post_loans_id_return_router);
app.use(get_loans_router);

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");

    // #swagger.tags = ['Server']
});

app.get('/', (req, res) => {
    res.status(200);
    res.send(`
        <p>Serviço de Empréstimos disponível</p>
        <p>Para informações das rotas consulte:</p>
        <a href="http://localhost:${port}/docs">http://localhost:${port}/docs</a>
    `);

    // #swagger.tags = ['Server']
});

app.listen(port, ()=>{
    console.info(`Servidor inicializado: http://localhost:${port}`);
});