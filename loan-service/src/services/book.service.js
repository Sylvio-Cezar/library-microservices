const axios = require("axios");

async function checkBookAvailability(bookId) {
    try {
        const bookResponse = await axios.get(`http://localhost:3001/books/${bookId}`);
        const book = bookResponse.data;

        if (book && book.available) {
            await axios.patch(`http://localhost:3001/books/${bookId}`, {
                available: false
            });
            return true;
        } else {
            return false;
        }
    } catch (err) {
        console.error(`Erro ao checar a disponibilidade do livro: ${err}`);
        return false;
    }
}

async function changeBookAvailability(bookId, availability) {
    try {
        await axios.patch(`http://localhost:3001/books/${bookId}`, {
            available: availability
        });
    } catch (error) {
        console.error(`Erro ao trocar a disponibilidade do livro: ${err}`);
    }
}

module.exports = { checkBookAvailability, changeBookAvailability };