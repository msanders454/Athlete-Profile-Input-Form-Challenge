var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var morgan = require('morgan');
var mongoose = require('mongoose')
var path = require('path');
var bodyParser = require('body-parser')
const router = express.Router();
require('./app/routes')(app);



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static(__dirname + '/public'));


mongoose.connect('mongodb://localhost:27017/athlete', function(err){
    if (err){
        console.log("Not Connected to the DB " + err)
    } else {
        console.log('Success')
    }
})

app.use(router);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})

app.listen(PORT , function() {
    console.log(`Running server at port ${PORT}`)
});