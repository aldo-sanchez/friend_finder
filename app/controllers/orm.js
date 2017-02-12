var connection = require('./../config/connection.js');

module.exports = function(){
  // getAll() joins two tables (inner) with and runs a callback
  this.getAll = function(array, cb){
    connection.query('SELECT ?? FROM ?? INNER JOIN ?? ON ?? = ??', array, function(err, data){
      if(err){throw err};
      cb(data);
    })
  },
  this.test = function(){
    console.log('we are in orm')
  }

  this.insertToUsers = function(array, cb){
    var queryStr = 'INSERT INTO users(??) VALUES(?);';
    
    connection.query(queryStr, array, function(err, data){
      if(err){throw err};
      cb();
    })
  }  

  this.insertToAnswers = function(array, cb){
      var queryStr = 'INSERT INTO answers(??) VALUES((SELECT id FROM users WHERE name = ?),?);';

    connection.query(queryStr, array, function(err, data){
      if(err){throw err};
      cb();
    })
  };
}