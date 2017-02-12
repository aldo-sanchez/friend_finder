var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressHandlebars = require('express-handlebars');;

PORT = 8080;

var app = express();



app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./app/controllers/apiRoutes.js')(app);
require('./app/controllers/htmlRoutes.js')(app);

app.listen(PORT, function(){
  console.log('listening on Port: ' + PORT);
});