var express = require('express'),
  app = express(),
  port = 3500,
  mongoose = require('mongoose'),
  ProjectFile = require('./api/models/projectFileModel'),
  UserImage = require('./api/models/userImageModel'),
  bodyParser = require('body-parser');

//Url connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Filesdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//import routes
var routes = require('./api/routes/routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port); 