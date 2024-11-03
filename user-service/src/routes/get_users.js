const express = require('express');
const router = express.Router();

const { User } = require("../models/index")

router.get("/users", async (req, res) => {
    const users = await User.findAll();
    console.log(users);

    if (users.length > 0) {
        const userList = users.map(user => user.toJSON());
        res.send(userList)
    } else {
        res.send([])
    }

});

module.exports=router;