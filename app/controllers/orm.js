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
  };

  this.insertData = function(usersArray, answersArray, cb){
    // we insert data into two tables (answers are dependent on users).  we use a transactoin to insert into both tables simultaneously

    // begin transaction operation
    connection.beginTransaction(function(err){
      if(err){throw err};
      
      // first data insertion to users table
      connection.query('INSERT INTO users(??) VALUES(?);', usersArray, function(error, data){
        if(error){
          return connection.rollback(()=>{throw error;});
        }
      });

      // second data insertion into answers table
      connection.query('INSERT INTO answers(??) VALUES((SELECT id FROM users WHERE name = ?),?);', answersArray, function(error, data){
        if(error){
          return connection.rollback(()=>{throw error});
        }
      });

      // commit transaction
      connection.commit(function(err){
        if(err){
          return connection.rollback(()=>{throw err});
        }

        console.log('success!');
        cb();
      });
    });
  }
}