'use strict';

var express = require('express');
var Todos = require('../models/todo');
var todos = require('../../mock/todos.json');
var router = express.Router();

router.get('/todos', function(req, res){
    Todos.find({}, function(err, todos){
        if (err){
        return    res.status(500).json({message: err.message});
        }       
        res.json({todos: todos});
    });
    
})




//TODO: Add A Post Route To Add New Entries
//TODO: Add A Put Route To Add Edit Entries
//TODO: Add A Delete Route To Delete New Entries

module.exports = router;