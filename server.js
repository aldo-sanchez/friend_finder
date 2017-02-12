var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

PORT = 8080;

var app = express();

app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

app.listen(PORT, function(){
  console.log('listening on Port: ' + PORT);
});