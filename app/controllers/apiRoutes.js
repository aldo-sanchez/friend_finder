var connection = require('./../config/connection.js');
var ORM = require('./orm.js');

var orm = new ORM();


// export function to api friends
module.exports = function(app){
  app.get('/api/friends', function(req, res){
    // populate columns needed for query 
    var columns = ['users.name', 'users.image'];
    for(i = 0; i < 10; i++){
      columns.push('answers.ans'+(i+1))
    };
    // populate entire array being sent to orm for query
    var array = [columns, 'users', 'answers', 'users.id', 'answers.user_id'];

    // callback required by orm
    function cb(data){
      res.send(data);
    };
    orm.getAll(array, cb);
  });
}