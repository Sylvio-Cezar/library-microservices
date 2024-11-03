const express = require('express');

const app = express();
const port = 3000;

const post_users_router = require('./routes/post_users')
const get_users_router = require('./routes/get_users');
const get_user_id_router = require('./routes/get_users_id')

app.use(express.json());
app.use(post_users_router)
app.use(get_users_router);
app.use(get_user_id_router);

app.get('/status', (req, res) => {
    res.status(200);
    res.send("OK");
});

app.listen(port, ()=>{
    console.info("Servidor inicializado")
});