const express = require('express');

const app = express();
const port = 3001;

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");
});

app.listen(port, ()=>{
    console.info("Servidor inicializado")
});