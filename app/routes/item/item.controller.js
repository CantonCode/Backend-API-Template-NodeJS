const express = require('express');
const router = express.Router();
const Joi = require('joi');


router.get('/getAllItems', getAllItems);
router.post('/addItem',addItem);

module.exports = router;

function getAllItems(req, res, next) {
    itemsService.getAllItems()
        .then(items => res.json(items))
        .catch(next);
}

function addItem(req,res,next){
    itemsService.addItem(req.body)
    .then( () => res.json({ message: 'Item Added'}))
    .catch(next)
    
}

