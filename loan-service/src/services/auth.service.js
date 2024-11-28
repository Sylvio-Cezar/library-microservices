const axios = require("axios");

async function checkLoanAvailability(bookId, userId) {
    try {
        const bookResponse = await axios.get(`http://localhost:3001/books/${bookId}`);
        const book = bookResponse.data;

        const userResponse = await axios.get(`http://localhost:3000/users/${userId}`);
        const user = userResponse.data;

        console.log(book);
        console.log(book.available);
        console.log(user);

        if (user && book && book.available) {
            await axios.patch(`http://localhost:3001/books/${bookId}`, {
                available: false
            });
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(`Erro ao checar a disponibilidade: ${err}`);
        return false;
    }
}

async function changeBookAvailability(bookId) {
    await axios.patch(`http://localhost:3001/books/${bookId}`, {
        available: true
    });
}

module.exports = { checkLoanAvailability, changeBookAvailability };
