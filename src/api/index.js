'use strict';

var express = require('express');

var router = express.Router();

router.get('/todos', function(req, res){
    res.json({
        todos: []
    });
})




//TODO: Add A Post Route To Add New Entries
//TODO: Add A Put Route To Add Edit Entries
//TODO: Add A Delete Route To Delete New Entries

module.exports = router;