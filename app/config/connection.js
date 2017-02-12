var mysql = require('mysql');
var keys = require('./keys.js');

connection = mysql.createConnection(keys.db);

connection.connect(function(err){
  if(err){throw err.stack;};
  console.log('connected as id: ' + connection.threadId);
});