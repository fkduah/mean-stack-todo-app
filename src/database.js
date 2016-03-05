'use strict';

var mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function (err){
    if (err){
        console.log('There is a error with the database');
    }else{
        console.log('You successfully connected to the database!')
    }
});