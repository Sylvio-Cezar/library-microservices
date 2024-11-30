const axios = require("axios");

async function checkUserExists(userId) {
    try {

        const userResponse = await axios.get(`http://localhost:3000/users/${userId}`);
        const user = userResponse.data;

        if (user) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(`Erro ao checar existência do usuário: ${err}`);
        return false;
    }
}

module.exports = { checkUserExists };