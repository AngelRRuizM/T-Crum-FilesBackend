var express = require('express'),
  app = express(),
  port = 3500,
  mongoose = require('mongoose'),
  UserImage = require('./api/models/userImageModel'),
  bodyParser = require('body-parser');

//Url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Filesdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  //set headers to allow cross origin request.
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
      res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
      res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

      next();
  });

//import routes
var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);