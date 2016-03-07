'use strict';

var Todo = require('./models/todo');

var todos =[
    'Feed The Homeless',
    'Watch The Children',
    'Visit The Fatherless',
    'Help The Motherless'
];

todos.forEach(function(todo, index){
    Todo.find({'name': todo}, function(err, todos){
        if(!err && !todos.length) {
            Todo.create({completed: false, name: todo});
        };
    });
});