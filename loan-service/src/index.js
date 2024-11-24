const express = require('express');

const app = express();
const port = 3002;

const post_loans_router = require('./routes/post_loans');

app.use(express.json());

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");
});

app.use(post_loans_router);

app.listen(port, ()=>{
    console.info("Servidor inicializado")
});