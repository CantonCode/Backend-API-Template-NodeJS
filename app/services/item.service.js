const config = require('../../config.json');
const db = require('../helpers/db')


module.exports = {
    getAllItems,
}

async function getAllItems() {
    const items = await db.Item.find();
    return items;
}