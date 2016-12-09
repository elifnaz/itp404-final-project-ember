// var dotenv = require('dotenv');
// dotenv.config(); // read in .env file and parse it

var express = require('express');
var app = express()
var Sequelize = require('sequelize');
var cors = require('cors');
var bodyParser = require('body-parser');
var randomZip = require('random-zipcode');

var DB_NAME = 'sql3147699';
var DB_USER = 'sql3147699';
var DB_PASSWORD = '4d2tapT9dy';

var sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: 'sql3.freemysqlhosting.net'
});

var Restaurant = sequelize.define('restaurant',  {
  name: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

app.use(function(request, response, next) {
  response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  //response.header('Access-Control-Allow-Origin', '*');
  next();
});

var yelp = require('./api/yelp');
app.use(cors());
app.use(bodyParser());

app.get('/search/:s', function(request, response) {
  var randomLocation = randomZip(true);
  yelp.search({ term: request.params.s, location: randomLocation}).then(function(results) {
    response.json(results);
  }, function(err) {
    response.json(err);
  });
});

app.get('/api/mylist', function(request, response) {
  var promise = Restaurant.findAll();
  promise.then(function(restaurants) {
    response.json({
      restaurants: restaurants
    });
  });
});

app.post('/api/mylist', function(request, response) {
  var restaurant = Restaurant.build({
    name: request.body.name,
    city: request.body.city
  });
  restaurant.save().then(function(restaurant) {
    response.json(restaurant);
  });
});

app.listen(3000);