var dotenv = require('dotenv');

dotenv.config();

const {
        DB_USER,
        DB_PASSWORD,
    } = process.env;

module.exports ={
        MONGO_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.as5xkk1.mongodb.net/MyPortfolio`
}
//test
