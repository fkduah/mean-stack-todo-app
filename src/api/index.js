'use strict';

var express = require('express');
var Todo = require('../models/todo');
var todos = require('../../mock/todos.json');
var router = express.Router();

router.get('/todos', function(req, res){
    Todo.find({}, function(err, todos){
        if (err){
        return    res.status(500).json({message: err.message});
        }       
        res.json({todos: todos});
    });
    
});

//Post Route To Add New Entries
router.post('/todos', function(req, res){
  var todo = req.body;   
    Todo.create(todo, function(err, todo){
        if (err){
            return res.status(500).json({err: err.message});
        }
        res.json({'todo':todo, message:"Todo Created"});
    });
});

// Put Route To Add Edit Entries

router.put('/todos/:id', function(req, res){
    var id = req.params.id;
    var todo = req.body;  
    if(todo && todo._id !== id){
        return res.status(500).json({err: "The ID's Don't Match!"})
    } 
    Todo.findByIdAndUpdate(id, todo, {new: true}, function(err, todo){
        if (err){
            return res.status(500).json({err: err.message});
        }
        res.json({'todo':todo, message:"Todo Updated"});
    })
});


//TODO: Add A Delete Route To Delete New Entries

module.exports = router;










