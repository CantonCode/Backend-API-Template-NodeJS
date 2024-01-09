const express = require('express');
const router = express.Router();
const Joi = require('joi');


router.get('/getAllItems', getAllItems);

module.exports = router;

function getAllItems(req, res, next) {
    itemsService.getAllItems()
        .then(items => res.json(items))
        .catch(next);
}