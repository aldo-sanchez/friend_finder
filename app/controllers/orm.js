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
}