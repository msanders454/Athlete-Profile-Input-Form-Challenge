var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;
var morgan = require('morgan');
var mongoose = require('mongoose')
var path = require('path');
var bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const router = express.Router();
require('./app/routes')(app);



app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static(__dirname + '/public'));

let uri = "mongodb://heroku_3hj7qs2b:mj1q8clap0f76hlfgjlvuvsbvu@ds253418.mlab.com:53418/heroku_3hj7qs2b";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  if (err){
    console.log("Not Connected to the DB " + err)
} else {
    console.log('Success')
}
  client.close();
});


app.use(router);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
})

app.listen(PORT , function() {
    console.log(`Running server at port ${PORT}`)
});