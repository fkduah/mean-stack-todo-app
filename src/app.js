'use strict';

var express = require('express');

var app = express();

app.use('/',express.static('public'));

var router = express.Router();

router.get('/todos', function(req, res){
    res.json({
        todos: []
    });
})

app.use('/api', router);


//TODO: Add A Post Route To Add New Entries
//TODO: Add A Put Route To Add Edit Entries
//TODO: Add A Delete Route To Delete New Entries


app.listen(3000, function(){
    console.log("We are listening on port 3000");
})