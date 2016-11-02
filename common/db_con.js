var mysql = require('mysql');
var config = require('../common/secret').db_info.local; /*DB instance 선택*/

module.exports = function(){
  return{
    init: function(){
      return mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        databases: config.database
      });
    },

    test_open: function(conn){
      conn.connect(function (err){
        if(err){
          console.log('mysql connection error!!');
          console.log(err)
        }else{
          console.log('mysql connection success!!');
        }
      });
    }
  }
};