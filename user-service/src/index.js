const express = require('express');

const app = express();
const port = 3000;
const post_users_router = require('./routes/post_users')

app.use(express.json());
app.use(post_users_router)

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");
});



app.listen(port, ()=>{
    console.info("Servidor inicializado")
});