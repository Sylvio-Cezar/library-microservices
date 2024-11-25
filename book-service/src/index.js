const express = require('express');
const swaggerUIPath = require('swagger-ui-express');
const swaggerjsonFilePath = require('../docs/swagger.json');
const app = express();
const port = 3001;

const post_books_router = require('./routes/post_books');
const get_books_router = require('./routes/get_books');
const get_books_id_router = require('./routes/get_books_id');
const patch_books_id_router = require('./routes/patch_books_id');


app.use(express.json());

app.use("/docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));

app.use(post_books_router);
app.use(get_books_router);
app.use(get_books_id_router);
app.use(patch_books_id_router);

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");

    // #swagger.tags = ['Server']
});

app.listen(port, () => {
    console.info(`Servidor rodando na porta ${port}`);
});
