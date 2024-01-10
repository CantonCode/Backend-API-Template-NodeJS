const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const router = express.Router();
const Joi = require('joi');
const itemsService = require('../../services/item.service')

/**
 * @openapi
 *  '/items/getAllItems':
 *  get:
 *   tag:
 *     - GetAllItems
 *   summary: Gets all items in DB
 *   description: returns all items
 *   
 *   responses:
 *    200:
 *      description: Fetched Successfully
 *    400:
 *      description: Bad Request
 */

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

