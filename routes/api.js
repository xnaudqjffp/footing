/**rest api
 *
 * login, signup, logout...etc...
 *
 * 모든 디비관련 제어는 api를 통해서 진행한다.
 */



var express = require('express');
var router = express.Router();

//var mysql_dbc = require('../common/db_con')();
//var connection = mysql_dbc.init();
//mysql_dbc.test_open(connection);

var login = require('../service/service_login');

//var bcrypt = require('bcrypt');


router.post('/login', function(req, res, next){
  var
    user_id = req.body.user_id,
    password = req.body.password;

  console.log(user_id);
  console.log(password);

  login.login(req, res, user_id, password);
});

module.exports = router;