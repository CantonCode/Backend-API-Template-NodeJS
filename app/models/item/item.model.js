const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    created: { type: Date,
         default: Date.now
         },
    itemTasks:{
        type:Array,
        required:true,
    },
});

module.exports = mongoose.model('Item', ItemSchema)