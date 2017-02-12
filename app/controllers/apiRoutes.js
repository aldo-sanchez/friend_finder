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

  app.post('/api/friends', function(req, res){
    var usersArray = [['name', 'image'],['gatox berkely', 'pic4']];
    var columns = ['user_id', ['ans1', 'ans2', 'ans3', 'ans4', 'ans5', 'ans6', 'ans7', 'ans8', 'ans9', 'ans10']];
    var ansArray = [columns, 'gatox berkely',[1,2,3,4,5,6,7,8,9,10]];

    function cb(){
      res.end();
    };

    orm.insertData(usersArray, ansArray, cb);
  });
}