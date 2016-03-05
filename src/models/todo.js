'use strict';

var mongoose = require('mongoose');

//todo.name
//todo.completed

var todoschema = new.mongoose.Schema({
    name: String,
    completed: Boolean
});

var model = mongoose.model('Todo', todoSchema);

modules.exports = model;