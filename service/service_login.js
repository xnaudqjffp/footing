/**
 * service model
 * login, logout, loginFail, loginLog, loginFailCntReset, etc...
 * */


var mysql_dbc = require('../common/db_con')();
var connection = mysql_dbc.init();

//var bcrypt = require('bcrypt');

var login = {};
var RESULT = [];

RESULT[0] = 'INTERNAL_ERROR';
/*디비 오류*/
RESULT[1] = 'NO_ACCOUNT';
/*등록된 계정이 없는 경우*/
RESULT[2] = 'PASSWORD_NOT_MATCHED';
/*패스워드가 일치하지 않을 경우*/
RESULT[3] = 'LOGIN_SUCCESS';
/*로그인 성공*/


login.login = function (req, res, user_id, password) {
  var stmt_login = 'select *from footing.`user`  where `user_id` = ?;';

  connection.query(stmt_login, user_id, function (err, result) {
    if (err) {
      res.json({
        'success': false,
        'msg': 'DB INTERNAL_ERROR'
      });
    } else {
      if (result.length === 0) {
        res.json({
          'success': false,
          'msg': '등록된 계정이 없습니다.'
        })
      } else {
        if (result[0].password !== password) {
          res.json({
            'success': false,
            'msg': '패스워드가 일치하지 않습니다.'
          });
        } else {

          res.json({
            'success': true,
            'msg': '로그인에 성공했습니다.'
          });
        }
      }
    }
  })
};
module.exports = login;