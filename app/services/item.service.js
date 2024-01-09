const config = require('../../config.json');
const db = require('../helpers/db')


module.exports = {
    getAllItems,
    addItem
}

async function getAllItems() {
    const items = await db.Item.find();
    return items;
}

async function addItem(params){
    const item = new db.Item(params)
    const itemResponse = await item.save();

    // if(!itemResponse) throw Error('Something went wrong while saving the post');
}