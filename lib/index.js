require('dotenv/config');

const { default: BotMate } = require('botmate');
const { PORT, DB_URL } = process.env;
BotMate(PORT, DB_URL);
