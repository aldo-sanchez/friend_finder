var connection = require('./../config/connection.js');
var ORM = require('./orm.js');

var orm = new ORM();


// export function to api friends
module.exports = function(app){
  // console.log(orm.test());
  app.get('/api/friends', function(req, res){
    function cb(data){
      res.send(data);
    };
    orm.getAll(cb);
  });
}