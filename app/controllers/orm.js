var connection = require('./../config/connection.js');

function ORM(){
  this.getAll = function(cb){
    connection.query('SELECT * FROM users', function(err, data){
      if(err){throw err};
      cb(data);
    })
  },
  this.test = function(){
    console.log('we are in orm')
  }
};

module.exports = ORM;