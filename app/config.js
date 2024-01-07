var dotenv = require('dotenv');

dotenv.config();

const {
        DB_USER,
        DB_PASSWORD,
        DB_CLUSTER,
        DB_NAME
    } = process.env;

module.exports ={
        MONGO_URI: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}`
}
//test
