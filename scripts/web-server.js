var express = require('express');
var path = require ('path');
var events = require('./eventsController');
var app = express();
var rootpath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(express.static(rootpath + '/app'));

app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8080);
console.log('Listening on port 8080...');